import { Atoms } from "atoms";
import { getButton } from "./components/button";
import { getInput } from "./components/input";
import { getShadows } from "./global/shadows";

export function getChakraTheme(theme: Atoms) {
    return {
        shadows: getShadows(),
        components: {
            Button: getButton(theme),
            Input: getInput(theme)
        }
    }
}