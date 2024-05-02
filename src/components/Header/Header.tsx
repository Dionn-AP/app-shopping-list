import {
    ContainerHeader,
    NameUser,
    styles
} from './styles';


const Header = () => {
    return(
        <ContainerHeader style={styles.shadow_header}>
            <NameUser>Olá, Dionnatan</NameUser>
        </ContainerHeader>
    );
}

export default Header;