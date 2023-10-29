import useTranslation, { KeyTranlation } from "../../hooks/use-tranlation"

type Props = {
    label: KeyTranlation,
    type?: 'submit' | 'button' | 'reset'
    color?: 'blue' | 'red'
    onClick?: () => void
}

const Button = ({ label, type, color = 'blue', onClick }: Props) => {

    const { t } = useTranslation()

    const colors = {
        blue: 'bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300',
        red: 'bg-red-700 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-300'
    }

    return (
        <button
            onClick={onClick}
            type={type || "button"}
            className={`capitalize w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ${colors[color]}`}
        >
            {t(label)}
        </button>
    )
}

export default Button