// Final working PropertyGrid with recursive global expand/collapse and local control
import React, { useState, useEffect, JSX } from "react";
import {
    TextField,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Switch,
    FormControlLabel,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Button,
    IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export type JSONSchemaProperty = StringSchema | NumberSchema | BooleanSchema | ObjectSchema | ArraySchema;

type StringSchema = {
    type: "string";
    title?: string;
    enum?: string[];
};

type NumberSchema = {
    type: "number";
    title?: string;
};

type BooleanSchema = {
    type: "boolean";
    title?: string;
};

type ObjectSchema = {
    type: "object";
    title?: string;
    properties: Record<string, JSONSchemaProperty>;
};

type ArraySchema = {
    type: "array";
    title?: string;
    items: JSONSchemaProperty;
};

export type JSONSchemaType = ObjectSchema;

interface PropertyGridProps<T extends Record<string, any>> {
    schema: JSONSchemaType;
    data: T;
    onChange: (updated: T) => void;
    level?: number;
}

export function PropertyGrid<T extends Record<string, any>>({
    schema,
    data,
    onChange,
    level = 0,
}: PropertyGridProps<T>) {
    const [accordionStates, setAccordionStates] = useState<Record<string, boolean>>({});

    const isExpanded = (key: string) => accordionStates[key] ?? true;
    const toggle = (key: string) => setAccordionStates((prev) => ({ ...prev, [key]: !isExpanded(key) }));

    const setAll = (expanded: boolean) => {
        const newState: Record<string, boolean> = {};
        const traverse = (schema: JSONSchemaProperty, prefix: string) => {
            newState[prefix] = expanded;
            if (schema.type === "object") {
                for (const [k, v] of Object.entries(schema.properties)) {
                    traverse(v, `${prefix}-${k}`);
                }
            } else if (schema.type === "array" && schema.items.type === "object") {
                traverse(schema.items, `${prefix}-item`);
            }
        };
        for (const [key, property] of Object.entries(schema.properties)) {
            traverse(property, `${level}-${key}`);
        }
        setAccordionStates(newState);
    };

    const handleFieldChange = (key: string, value: any) => {
        onChange({ ...data, [key]: value });
    };

    const renderField = (key: string, property: JSONSchemaProperty): JSX.Element | null => {
        const value = data?.[key];
        const fullKey = `${level}-${key}`;

        switch (property.type) {
            case "string":
                return (
                    <TextField
                        fullWidth
                        size="small"
                        label={property.title || key}
                        value={value || ""}
                        onChange={(e) => handleFieldChange(key, e.target.value)}
                    />
                );
            case "number":
                return (
                    <TextField
                        fullWidth
                        size="small"
                        type="number"
                        label={property.title || key}
                        value={value ?? ""}
                        onChange={(e) => handleFieldChange(key, parseFloat(e.target.value))}
                    />
                );
            case "boolean":
                return (
                    <FormControlLabel
                        label={property.title || key}
                        control={
                            <Switch checked={!!value} onChange={(e) => handleFieldChange(key, e.target.checked)} />
                        }
                    />
                );
            case "array": {
                const array = Array.isArray(value) ? value : [];
                const isObj = property.items.type === "object";
                return (
                    <Accordion expanded={isExpanded(fullKey)} onChange={() => toggle(fullKey)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{property.title || key}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {array.map((item, idx) => {
                                const itemKey = `${fullKey}-item-${idx}`;
                                return isObj ? (
                                    <Accordion
                                        key={itemKey}
                                        expanded={isExpanded(itemKey)}
                                        onChange={() => toggle(itemKey)}
                                    >
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Box
                                                sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
                                            >
                                                <Typography>Item {idx + 1}</Typography>
                                                <IconButton
                                                    size="small"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        const updated = [...array];
                                                        updated.splice(idx, 1);
                                                        handleFieldChange(key, updated);
                                                    }}
                                                >
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <PropertyGrid
                                                schema={property.items as ObjectSchema}
                                                data={item}
                                                onChange={(newVal) => {
                                                    const updated = [...array];
                                                    updated[idx] = newVal;
                                                    handleFieldChange(key, updated);
                                                }}
                                                level={level + 1}
                                            />
                                        </AccordionDetails>
                                    </Accordion>
                                ) : (
                                    <Box key={itemKey} sx={{ display: "flex", gap: 1 }}>
                                        <TextField
                                            size="small"
                                            fullWidth
                                            value={item}
                                            onChange={(e) => {
                                                const updated = [...array];
                                                updated[idx] = e.target.value;
                                                handleFieldChange(key, updated);
                                            }}
                                        />
                                        <IconButton
                                            onClick={() => {
                                                const updated = [...array];
                                                updated.splice(idx, 1);
                                                handleFieldChange(key, updated);
                                            }}
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                );
                            })}
                            <Button
                                size="small"
                                variant="outlined"
                                startIcon={<AddIcon />}
                                onClick={() => {
                                    const updated = [...array];
                                    updated.push(isObj ? {} : "");
                                    handleFieldChange(key, updated);
                                }}
                            >
                                Add
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                );
            }
            case "object":
                return (
                    <Accordion expanded={isExpanded(fullKey)} onChange={() => toggle(fullKey)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{property.title || key}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ pl: level * 2 }}>
                                <PropertyGrid
                                    schema={property}
                                    data={value || {}}
                                    onChange={(newVal) => handleFieldChange(key, newVal)}
                                    level={level + 1}
                                />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                );
            default:
                return null;
        }
    };

    return (
        <Box>
            {level === 0 && (
                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mb: 2 }}>
                    <Button size="small" onClick={() => setAll(false)}>
                        Collapse All
                    </Button>
                    <Button size="small" onClick={() => setAll(true)}>
                        Expand All
                    </Button>
                </Box>
            )}
            {Object.entries(schema.properties).map(([k, p]) => (
                <Box key={k} sx={{ mb: 2 }}>
                    {renderField(k, p)}
                </Box>
            ))}
        </Box>
    );
}
