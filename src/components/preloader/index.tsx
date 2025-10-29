import  { LoaderContainer,  Spinner } from "./styles";

function PreloaderContent() {
    return (
        <LoaderContainer>
            <Spinner />
            <p>Carregando posts...</p>
        </LoaderContainer>
    );
}

export default PreloaderContent