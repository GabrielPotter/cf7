import React, { useEffect, useState } from "react";
import { PropertyGrid, JSONSchemaType } from "./PropertyGrid";

import { Box } from "@mui/material";
import { on } from "events";

interface PropData{
    onFormDataChange: (formData: any) => void;
}

export const PropertiesPanel: React.FC<PropData> = ({onFormDataChange, }) => {
    const [schema, setSchema] = useState<JSONSchemaType | null>(null);
    const [formData, setFormData] = useState<any>({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const load = async () => {
            const result = await (window as any).jsonAPI.loadJsonAndSchema("configs", "config");
            if (result) {
                setSchema(result.schema);
                setFormData(result.data);
                setLoaded(true);
                onFormDataChange(result.data);
            }
        };
        load();
    }, []);

    useEffect(() => {
        if (loaded) {
            onFormDataChange(formData);
        }
    },[formData])

    const handleSave = async () => {
        const success = await (window as any).jsonAPI.saveJson("configs", "config", formData);
        if (success) alert("Saved.");
        else alert("Failed to save.");
    };

    if (!loaded || !schema) return <div>Loading...</div>;

    return (
        <Box
            sx={{
                height: "100vh",
                overflow: "auto", // scrollbar only on this
                p: 2,
                minHeight: "0",
            }}
        >
            <PropertyGrid schema={schema} data={formData} onChange={setFormData} />
            <button onClick={handleSave}>💾 Save</button>
        </Box>
    );
};
