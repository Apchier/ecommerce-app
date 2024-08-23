/* eslint-disable react/prop-types */

const SecondaryStats = ({ dataCount, percent, icon, desc, className }) => {
    return (
        <div className={`p-6 bg-gradient-to-r rounded-2xl shadow-lg relative ${className}`}>
            <div className="flex justify-between items-center">
                <span className="text-white text-4xl font-bold">{dataCount}</span>
                <span className="flex items-center text-white text-sm ml-1">{percent} {icon}</span>
            </div>
            <p className="text-white mt-4">{desc}</p>
            <div className="h-12 mt-4">
                {/* <Line data={data} options={options} /> */}
            </div>
        </div>
    )
}

export default SecondaryStats