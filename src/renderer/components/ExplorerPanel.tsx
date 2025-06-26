import React from 'react';
import { Box } from '@mui/material';

export const ExplorerPanel: React.FC = () => (
  <Box>
    <Box fontWeight="bold" mb={1}>Explorer</Box>
    <Box>📁 src</Box>
    <Box ml={2}>📄 App.tsx</Box>
  </Box>
);