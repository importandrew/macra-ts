import Header from '../Header/Header';

const MainPage = () => {
    return (
    <div className="flex flex-col h-screen text-5xl items-center">
        <div className="flex w-screen">
            <Header />
        </div>
        <div className="flex w-screen h-screen font-mono justify-center items-center">
            Welcome to MaCRa
        </div>
    </div>
)};

export default MainPage;
