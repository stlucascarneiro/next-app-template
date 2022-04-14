import { Atoms } from "atoms";

export function getInput(theme: Atoms) {
    return {
        variants: {
            unstyled: {
                field: {
                    width: '100%',
                    height: '38px',
                    flexGrow: '1',
                    fontSize: theme.typography.text.size,
                    fontWeight: 500,
                    color: theme.color.neutral[900],
                    _placeholder: {
                        color: theme.color.neutral[400],
                        fontSize: theme.typography.text.size,
                        fontWeight: theme.typography.text.weight,
                    }
                }
            }
        },
        defaultProps: {
            variant: "unstyled"
        }
    }
}