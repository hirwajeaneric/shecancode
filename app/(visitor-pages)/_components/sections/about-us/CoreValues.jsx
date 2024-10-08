import ReusableSection from '../../ReusableSection';
import Image from 'next/image';

export default function CoreValues({ values }) {
  const { title, description, listOfValues } = values;
  return (
    <ReusableSection flexDirection={"row"}>
      {/* Our Values Section */}
      <div className="flex justify-center md:mb-8">
        <div className="text-center">
          <h3 className="section-sub-title">
            {title}
          </h3>
          <div className='max-w-5xl'>
            <p className="font-light text-base font lg:text-xl text-center text-sky-950">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-5 w-full md:w-8/12 mb-12'>
        {/* Top items  */}
        <div className='flex w-full justify-between gap-4 flex-wrap'>
          <ValueContainer
            icon={listOfValues[0].icon}
            title={listOfValues[0].title}
            description={listOfValues[0].description}
          />
          <ValueContainer
            icon={listOfValues[1].icon}
            title={listOfValues[1].title}
            description={listOfValues[1].description}
          />
        </div>

        {/* Logo  */}
        <div className='w-full justify-center items-center my-5 hidden md:flex'>
          <Image src={'/logo.png'} className='sm:w-40 md:w-80 mx-auto' width={500} height={500} alt='SheCanCODE Logo' />
        </div>

        {/* Bootom items  */}
        <div className='flex w-full justify-between gap-4 flex-wrap'>
          <ValueContainer
            icon={listOfValues[2].icon}
            title={listOfValues[2].title}
            description={listOfValues[2].description}
          />
          <ValueContainer
            icon={listOfValues[3].icon}
            title={listOfValues[3].title}
            description={listOfValues[3].description}
          />
        </div>
      </div>
    </ReusableSection >
  );
};

const ValueContainer = ({ icon, title, description }) => {
  return (
    <div className='w-full sm:w-[48%] md:w-2/5 flex flex-col gap-3'>
      <div className='flex gap-3 items-center flex-wrap md:flex-nowrap'>
        <Image src={icon} alt={title} width={50} height={50} />
        <h4 className="font-bold text-xl md:text-2xl text-sky-700">{title}</h4>
      </div>
      <p className="font-light text-base font lg:text-xl text-justify text-sky-950">
        {description}
      </p>
    </div>
  )
}