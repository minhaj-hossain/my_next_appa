import Link from 'next/link';

const ServicesPage = () => {
    return (
        <div>
            this is a services page

            <Link className="bg-red-700 p-4" href={'/'}>back to home</Link>

        </div>
    );
};

export default ServicesPage;