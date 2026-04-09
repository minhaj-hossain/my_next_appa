import Link from 'next/link';

const AboutPage = () => {
    return (
        <div>
            this is about page

            <Link className="bg-red-700 p-4" href={'/'}>back to home</Link>
        </div>
    );
};

export default AboutPage;