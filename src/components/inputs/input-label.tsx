
type Props = {
    name?: string
    label: string
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
    placeholder?: string
    placeholderCapitalize?: boolean
}

const InputLabel = ({ label, type, placeholder, placeholderCapitalize = true }: Props) => {


    return (
        <div>
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
            >
                {label}
            </label>
            <input
                type={type || "text"}
                className={`${placeholderCapitalize ? 'placeholder:capitalize' : ''} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder={placeholder}
                required
            />
        </div>
    )
}

export default InputLabel