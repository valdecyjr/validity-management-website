import InputIndex from "./components/inputIndex";

function Home(){
    return <main className="">
        <form className="">
            <InputIndex field={"Usuario:"} typeInput={"text"}/>
            <InputIndex field={"Password:"} typeInput={"password"}/>
            <button>Entrar</button>
        </form>
    </main>
}

export default Home;