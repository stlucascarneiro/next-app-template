import { Atoms } from "atoms";

export function getButton(theme: Atoms) {
    return {
        variants: {
            primary: {
                width: '100%',
                height: '100%',
                bg: theme.color.background.primary,
                color: 'white',
                border: `none`,
                padding: '0 12px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 600,
                _hover: {
                    boxShadow: '0 0 8px 4px rgba(71, 132, 174, 0.5)'
                }
            },
            secondary: {
                width: '100%',
                height: '100%',
                bg: theme.color.neutral[200],
                color: theme.color.neutral[600],
                border: `none`,
                padding: '0 12px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 600,
                _hover: {
                    bg: theme.theme === "light" ? theme.color.neutral[300] : theme.color.neutral[100]
                }
            }
        }
    }
}