import SidebarComponent from './components/sidebar';

export default function Home() {
    return (
        <>
            <div className="flex">
                <SidebarComponent />
                <h1>Hello</h1>
                <div></div>
            </div>
        </>
    );
}
