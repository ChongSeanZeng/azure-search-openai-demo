import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = ["What is FSC Trace?", "What happens in a Forest management certification?", "Can oil palm be certified against FSC FM?"];

const GPT4V_EXAMPLES: string[] = [
    "Compare the difference of FM and COC certification.",
    "What is the expected outcome of major nonconformity?",
    "Can you identify any similarity between multisite and single certificate?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
