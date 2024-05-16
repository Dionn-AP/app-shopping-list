import {
    ContainerUserInfo,
    ContentInfo,
    ContainerInfo,
    EmailUserText,
    InputNameUser,
    PhoneUserText,
    ExitApp,
    ButtonSendUpdate,
    ButtonEditInfo,
    ContainerModal,
    TextButtonEditInfo,
    TextButtonUpdate,
    ContainerButtonBottom,
    InputPhoneUser,
    InputEmailUser,
    NameUserText,
    ButtonCloseModal,
    ContainerContentModal,
    ContentInfoModal,
    ButtonLogout,
    MessageUpdatedUserInfo,
    BoxMessage,
    styles
} from './styles';

import { useAuth } from '../../context/AuthContext';
import Header from '../../components/Header/Header';
import LoadingIn from '../../components/LoadingIn/LoadingIn';

import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import theme from '../../styles/theme';
import { useEffect, useState } from 'react';
import { Modal, RefreshControl, ScrollView } from 'react-native'
import api from '../../services/axios';
import { getHeaders } from '../../utils/token';

const UserInfo = () => {
    const { authData, logout, updateUserDataLocalStorage } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [load, setLoad] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true); // Define o estado de refreshing como true ao iniciar o refresh
        getUser(); // Carrega os dados do usuário
        setRefreshing(false); // Define o estado de refreshing como false ao concluir o refresh
    };

    const getUser = async () => {
        try {
            const response = await api.get('/user', getHeaders(authData?.token));
            setName(response.data.username);
            setPhone(response.data.phone);
            setEmail(response.data.email);

        } catch (error) {
            console.log("Algo deu errado", error);
        }
    }

    const updateDataUser = async () => {
        setLoad(true);
        setSuccess(false);

        const dataUser = {
            username: name !== authData?.user.username ? name : authData?.user.username,
            email: authData?.user.email,
            phone: phone !== authData?.user.phone ? phone : authData?.user.phone,
        }
        try {
            const response = await api.put('/user', {
                ...dataUser
            }, getHeaders(authData?.token));

            setSuccess(true);
            setMessage(response.data.message);

            setTimeout(() => {
                setOpenModal(false);
                setLoad(false);
                setSuccess(false);
            }, 3000);

            getUser();

            updateUserDataLocalStorage(dataUser);

        } catch (error) {
            console.log("Algo deu errado", error)
        }
    }

    useEffect(() => {
        getUser();
    }, []);


    return (
        <ScrollView
            contentContainerStyle={styles.scroll}
            refreshControl={ // Adiciona o RefreshControl para habilitar o pull to refresh
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            <ContainerUserInfo>
                <Header title='Meus dados' />

                {
                    openModal &&
                    <Modal style={styles.modal} transparent={true} animationType='slide'>

                        <ContainerModal>
                            <ContainerContentModal>
                                <ButtonCloseModal onPress={() => setOpenModal(false)}>
                                    <Ionicons
                                        name="close-circle"
                                        size={24}
                                        color={theme.colors.color_light} />
                                </ButtonCloseModal>

                                {
                                    success &&
                                    <BoxMessage>
                                        <MessageUpdatedUserInfo>{message}</MessageUpdatedUserInfo>
                                    </BoxMessage>
                                }

                                {
                                    success ?
                                        <Octicons
                                            name="check-circle-fill"
                                            size={120}
                                            color={theme.colors.tertiary} />
                                        :
                                        load ?
                                            <LoadingIn colorLoading={theme.colors.tertiary} />
                                            :
                                            <ContentInfoModal>
                                                <ContentInfo>
                                                    <InputNameUser
                                                        placeholder={authData?.user.username}
                                                        placeholderTextColor={theme.colors.background}
                                                        onChangeText={setName}
                                                        value={name}
                                                        autoCapitalize="none"
                                                    />
                                                </ContentInfo>

                                                <ContentInfo>
                                                    <InputEmailUser
                                                        editable={false}
                                                        value={authData?.user.email}
                                                        autoCapitalize="none"
                                                    />
                                                </ContentInfo>

                                                <ContentInfo>
                                                    <InputPhoneUser
                                                        placeholder={authData?.user.phone ? authData?.user.phone : "Edite seu numero de telefone"}
                                                        placeholderTextColor={theme.colors.background}
                                                        onChangeText={setPhone}
                                                        value={phone}
                                                        autoCapitalize="none"
                                                    />
                                                </ContentInfo>
                                            </ContentInfoModal>
                                }

                                {
                                    (!success && !load) &&
                                    <ButtonSendUpdate
                                        style={((!name || !phone) || (name === authData?.user.username && phone === authData?.user.phone)) && styles.disabled_button}
                                        onPress={() => updateDataUser()}
                                        disabled={((!name || !phone) || (name === authData?.user.username && phone === authData?.user.phone)) ? true : false}
                                    >
                                        <TextButtonUpdate>Salvar</TextButtonUpdate>
                                    </ButtonSendUpdate>
                                }

                            </ContainerContentModal>

                        </ContainerModal>

                    </Modal>
                }

                <ContainerInfo>

                    <ContentInfo>
                        <Ionicons name="person-sharp" size={26} color={theme.colors.background} />
                        <NameUserText>{authData?.user.username}</NameUserText>
                    </ContentInfo>

                    <ContentInfo>
                        <MaterialIcons name="email" size={26} color={theme.colors.background} />
                        <EmailUserText>{authData?.user.email}</EmailUserText>
                    </ContentInfo>

                    <ContentInfo>
                        <MaterialIcons name="phone-android" size={26} color={theme.colors.background} />
                        <PhoneUserText>{authData?.user.phone}</PhoneUserText>
                    </ContentInfo>

                    <ContentInfo onPress={logout}>
                        <ButtonLogout onPress={logout}>
                            <SimpleLineIcons
                                name="logout" size={22} color={theme.colors.background} />
                            <ExitApp>Sair</ExitApp>
                        </ButtonLogout>

                    </ContentInfo>

                </ContainerInfo>

                <ContainerButtonBottom>
                    <ButtonEditInfo
                        onPress={() => setOpenModal(true)}
                    >
                        <TextButtonEditInfo>Editar</TextButtonEditInfo>
                    </ButtonEditInfo>
                </ContainerButtonBottom>

            </ContainerUserInfo>
        </ScrollView>
    );
}

export default UserInfo;