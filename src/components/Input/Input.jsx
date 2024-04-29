const Input = ({value, onChangeHandler ,placeholder}) => {
    return (
        <input type="text" value={value} onChange={onChangeHandler} placeholder={placeholder} className="p-2 text-lg sm:text-xl md:text-2xl border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"/>
    );
};

export default Input;