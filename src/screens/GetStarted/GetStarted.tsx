import React, { useState } from 'react';
import { Text, SafeAreaView } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';

import ButtonDefault from '../../components/ButtonDefault/ButtonDefault';

import GetStartedPage from '../../components/GetStartedPage/GetStartedPage';

import ImageOne from '../../assets/image-getstarted-01.svg';
import ImageTwo from '../../assets/image-getstarted-02.svg';
import ImageThre from '../../assets/image-getstarted-03.svg';
import ImageFour from '../../assets/image-getstarted-04.svg';
import ImageFinaly from '../../assets/image-getstarted-final.svg';

import theme from '../../styles/theme';

import {
    ContainerGetStarted,
    FooterTabView,
    ButtonTabView,
    styles
} from './styles';

const FirstRoute: React.FC = () => (
    <ContainerGetStarted>
        <ImageOne />
        <GetStartedPage
            step={1}
            text={"Faça a sua lista antecipada em casa. Escolha os produto ou cadastre novos. Você pode fazer iso também durante a sua compralance os valores e a quantidade de cada item durante a sua compra."}
        />

    </ContainerGetStarted>
)

const SecondRoute: React.FC = () => (
    <ContainerGetStarted>
        <ImageTwo />
        <GetStartedPage
            step={2}
            text={"Lance os valores e a quantidade de cada item durante a sua compra."}
        />
    </ContainerGetStarted>
)


const ThirdRoute: React.FC = () => (
    <ContainerGetStarted>
        <ImageThre />
        <GetStartedPage
            step={3}
            text={"Saiba quanto você vai pagar antes de chegar ao caixa."}
        />
    </ContainerGetStarted>
)


const FourthRoute: React.FC = () => (
    <ContainerGetStarted>
        <ImageFour />
        <GetStartedPage
            step={4}
            text={"Você pode salvar suas listas e comparar com as próximas compras. Além de reaproveitar as listas salvas.te"}
        />
    </ContainerGetStarted>
)


const FifthRoute: React.FC = () => (
    <ContainerGetStarted>
        <Text style={[styles.text_header, { fontFamily: "Montserrat_600SemiBold" }]}>Parabéns por chegar até aqui, aproveite!</Text>
        <ImageFinaly />
        <GetStartedPage
            step={5}
        />
        <ButtonDefault
            text="Login"
            colorButton={theme.button_login.color}
            bgColor={theme.button_login.background}
            screen="home"
        />
    </ContainerGetStarted >
)



const GetStarted = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first' },
        { key: 'second' },
        { key: 'third' },
        { key: 'fourth' },
        { key: 'fifth' }
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,
        fifth: FifthRoute
    });

    const renderIndicators = (props: any) => (
        <FooterTabView>
            {props.navigationState.routes.map((route: any, i: number) => (
                <ButtonTabView
                    key={i + route.key + "route"}
                    style={{  backgroundColor: index === 4 ? theme.colors.background : (index === i ? theme.colors.tertiary  : theme.colors.color_light) }}
                />
            ))}
        </FooterTabView>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TabView
                renderTabBar={renderIndicators}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                tabBarPosition="bottom"
            />
        </SafeAreaView>
    );
}

export default GetStarted;
