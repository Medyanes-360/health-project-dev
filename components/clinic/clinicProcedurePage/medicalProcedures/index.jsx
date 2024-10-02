import CardComponent from "@/globalElements/Card";

const MedicalProcedures = ({ procedures }) => {
  return (
    <div>
      <CardComponent>
        <div className="flex items-center mb-2 gap-2">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="56" height="56" rx="28" fill="white" />
            <path
              d="M11.7368 29.8334C14.2206 36.8825 20.4392 42.4225 27.675 45.1656C27.8843 45.245 28.1155 45.245 28.3249 45.1656C33.0836 43.3615 37.3413 40.0034 40.4115 36.0486C42.1348 33.8288 43.5027 31.3961 44.3699 28.9167H39.1898C38.8251 28.9167 38.4754 28.7718 38.2175 28.514L36.501 26.7975L34.6042 30.5912C34.1845 31.4306 33.0657 31.6122 32.4021 30.9485L30.8669 29.4134L27.5034 34.1222C26.8149 35.0861 25.3111 34.7863 25.0448 33.6321L23.0597 25.03L19.9778 30.5773C19.494 31.4482 18.2736 31.5315 17.6758 30.7346L15.9841 28.4789L15.0323 29.4306C14.7745 29.6885 14.4247 29.8334 14.0601 29.8334H11.7368Z"
              fill="#52B8AB"
            />
            <path
              opacity="0.5"
              d="M10.5835 23.1211C10.5835 17.2608 15.0477 12.4167 20.6742 12.4167C23.5788 12.4167 26.1757 13.7181 28.0005 15.7777C29.8288 13.7176 32.4366 12.4167 35.3262 12.4167C40.9526 12.4167 45.4168 17.2608 45.4168 23.1211C45.4168 24.4268 45.2428 25.7559 44.9165 27.0833H39.3799L37.348 25.0515C36.6844 24.3878 35.5656 24.5694 35.1459 25.4088L33.249 29.2025L31.7809 27.7344C31.1801 27.1336 30.1836 27.2161 29.6898 27.9075L26.6028 32.2292L24.5782 23.4558C24.295 22.2286 22.648 21.9963 22.0364 23.0972L18.7187 29.0691L17.1339 26.9561C16.6319 26.2867 15.6533 26.2171 15.0616 26.8088L13.8705 28H11.1854C10.7931 26.4339 10.5835 24.8033 10.5835 23.1211Z"
              fill="#52B8AB"
            />
          </svg>

          <h2 className="text-2xl font-poppins">Medical Procedures</h2>
        </div>
        <div>
          <ul className=" flex flex-wrap gap-2">
            {procedures.map((procedure, index) => (
              <li
                key={index}
                className="flex justify-between items-center space-x-1  bg-gray-50 min-h-[60px] w-fit px-5"
              >
                <span className="text-lg font-poppins mr-2 whitespace-nowrap">
                  {procedure.name}:
                </span>
                <span className="text-2xl">{procedure.icon}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardComponent>
    </div>
  );
};

export default MedicalProcedures;
