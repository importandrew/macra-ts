import Header from '../Header/Header';
import MainButton from './Button';

const MainPage = () => {
    return (
    <div className="flex flex-col h-screen text-5xl items-center my-auto">
        <div className="flex w-screen">
            <Header />
        </div>
        <div className="flex flex-col w-screen h-screen font-mono justify-center items-center text-center">
            Welcome to MaCRa
        </div>
        <div className="flex flex-col w-screen">
            <MainButton text="Current game" link="/now"/>
            <MainButton text="Last game" link="/last"/>
            <MainButton text="Statistics" link="/stats"/>
        </div>
    </div>
)};

export default MainPage;
