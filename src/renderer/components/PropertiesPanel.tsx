import React, { useEffect, useState } from "react";
import { PropertyGrid, JSONSchemaType } from "./PropertyGrid";

import { Box } from "@mui/material";

export const PropertiesPanel: React.FC = () => {
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
            }
        };
        load();
    }, []);

    const handleSave = async () => {
        const success = await (window as any).jsonAPI.saveJson("configs", "config", formData);
        if (success) alert("Saved.");
        else alert("Failed to save.");
    };

    if (!loaded || !schema) return <div>Loading...</div>;

    return (
        <>
            <PropertyGrid schema={schema} data={formData} onChange={setFormData} />
            <button onClick={handleSave}>💾 Save</button>
        </>
    );
};
