const DropDownFilterDate = () => {
    const DateValue = [
        { id: 1, date: "Past 7 days" },
        { id: 2, date: "Past 14 days" },
        { id: 3, date: "Past 30 days" },
        { id: 4, date: "Past 90 days" },
    ];

    return (
        <select
            name=""
            id=""
            className="bg-white border border-gray-300 shadow-lg p-2 rounded-md outline-none"
        >
            {DateValue.map((item) => (
                <option key={item.id} value={item.date}>
                    {item.date}
                </option>
            ))}
        </select>
    );
};

export default DropDownFilterDate;
