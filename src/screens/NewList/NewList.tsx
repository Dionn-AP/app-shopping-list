import React, { useState } from 'react';
import {
    ContainerNewList,
    ContainerContentNewList,
    InputSearchItems,
    ContainerInputsSearchItems,
    ButtonSearchAdd,
    ContainerContentItems,
    ContainerUnit,
    ContentUnit,
    TextUnit,
    ContainerUnitAndSelect,
    ContainerSelect,
    ContainerItemsList,
    ButtonDelete,
    MessageBoxItemsDeleted,
    MessageBoxItemsDeletedText,
    SaveList,
    styles
} from './styles';
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Header from "../../components/Header/Header";
import theme from '../../styles/theme';
import { DataList, Item } from '../../@types';
import { useNavigation } from '@react-navigation/native';
import { ContainerContentList, ContainerList, NameItem, NameList } from '../../components/ListOppened/styles';
import { ButtonCloseModal } from '../UserInfo/styles';
import { CheckBox } from '@rneui/themed';
import { ContainerListLeft } from '../MyLists/styles';
import Progress from '../../components/Progress/Progress';
import api from '../../services/axios';
import { getHeaders } from '../../utils/token';
import { useAuth } from '../../context/AuthContext';
import LoadingIn from '../../components/LoadingIn/LoadingIn';

interface OptionUnitState {
    selected: number;
    unselected: number;
}

const NewList = () => {
    const nav = useNavigation();
    const { authData } = useAuth();

    const [load, setLoad] = useState(false);
    const [createNewList, setCreateNewList] = useState(false);
    const [success, setSuccess] = useState(false);
    const [itemName, setItemName] = useState('');
    const [items, setItems] = useState<Item[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [listName, setListName] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('unidade');
    const [optionUnit, setOptionUnit] = useState<OptionUnitState>({
        selected: 1,
        unselected: 2
    });
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [checked, setChecked] = useState(false);
    const [checkedItems, setCheckedItems] = useState<number[]>([]);
    const [visibleCheckedItem, setVisibleCheckedItem] = useState(false);
    const [message, setMessage] = useState("");
    const [progress, setProgress] = useState<number>(1);

    const selectUnit = (unit: string) => {
        if (unit === "unidade") {
            setSelectedUnit(unit);
            setOptionUnit(prevState => ({
                ...prevState,
                selected: 1,
                unselected: 2
            }));
        } else {
            setSelectedUnit(unit);
            setOptionUnit(prevState => ({
                ...prevState,
                selected: 2,
                unselected: 1
            }));
        }
    }

    const handleAddItem = () => {
        if (!listName) {
            setModalVisible(true);
            return;
        }

        if (!itemName) {
            Alert.alert("Ops", "Você não pode adicionar um item sem nome");
            return;
        }

        const newItem: Item = {
            name: itemName,
            quantity: 1,
            unit: selectedUnit,
            price: 0,
            status: "não comprado"
        };

        if (editIndex !== null) {
            const updatedItems = [...items];
            updatedItems[editIndex] = newItem;
            setItems(updatedItems);
            setEditIndex(null);
        } else {
            setItems([...items, newItem]);
        }

        setItemName('');
    };

    const handleEditItem = (index: number) => {
        const itemToEdit = items[index];
        setItemName(itemToEdit.name);
        setSelectedUnit(itemToEdit.unit!);
        setOptionUnit({
            selected: itemToEdit.unit === 'unidade' ? 1 : 2,
            unselected: itemToEdit.unit === 'unidade' ? 2 : 1
        });
        setEditIndex(index);
    };

    const handleDeleteItems = () => {
        Alert.alert(
            "Deletar Itens",
            "Você tem certeza que deseja deletar os itens selecionados?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Deletar",
                    onPress: () => {
                        const totalSelected = checkedItems.length;
                        const updatedItems = items.filter((_, index) => !checkedItems.includes(index));
                        setItems(updatedItems);
                        setCheckedItems([]);
                        setMessage(`Um total de ${totalSelected} ${totalSelected > 1 ? "itens foram excluídos" : "item foi excluído"} `);
                       
                        setTimeout(() => {
                            setMessage("");
                        }, 3000);
                    },
                    style: "destructive"
                }
            ],
            { cancelable: true }
        );
    };

    const handleCreateList = () => {
        if(!listName) {
            return;
        }
        setModalVisible(false);
    }

    const handleCreateListInDataBase = async () => {
        if (items.length < 1) {
            Alert.alert("Ops", "Você não pode salvar uma lista vazia. Adicione pelo menos um item.");
        }

        const dataList: DataList = {
            name: listName,
            items: [...items]
        }

        try {
            setLoad(true);

            const response = await api.post('/create/list', {
                ...dataList
            }, getHeaders(authData?.token));

            setSuccess(true);

            setTimeout(() => {
                setCreateNewList(true);
                setSuccess(false);
                setLoad(false);
                setItems([]);
                setListName("");
            }, 2000)

        } catch (error: any) {
            setLoad(false);
            setCreateNewList(false);
            setSuccess(false);
            Alert.alert("Ops", "Não foi possível criar a lista.")
            console.log("Erro", "Algo deu errado", error);
        }
    };

    const handleVisibleSelectedItems = () => {
        setChecked(!checked);
        setVisibleCheckedItem(!visibleCheckedItem);
    }

    const handleToggleItemCheckbox = (index: number) => {
        if (checkedItems.includes(index)) {
            setCheckedItems(checkedItems.filter(itemIndex => itemIndex !== index));
        } else {
            setCheckedItems([...checkedItems, index]);
        }
    }

    return (
        <ContainerNewList>
            <Header title='Criar lista' items={items} />
            <ContainerContentNewList>
                <ContainerInputsSearchItems>
                    <InputSearchItems
                        placeholder="Adicione um produto à sua lista"
                        value={itemName}
                        onChangeText={setItemName}
                    />
                    <ButtonSearchAdd activeOpacity={0.8} onPress={handleAddItem}>
                        <MaterialCommunityIcons
                            name="plus-circle"
                            size={36}
                            color={theme.colors.background} />
                    </ButtonSearchAdd>
                </ContainerInputsSearchItems>

                {
                    listName ?
                    <ContainerUnitAndSelect>
                        <ContainerUnit>
                            <ContentUnit
                                activeOpacity={0.8}
                                style={optionUnit.selected === 1 ? styles.background_unit_selected : styles.background_unit_unselected}
                                onPress={() => selectUnit("unidade")}>
                                <TextUnit style={optionUnit.selected === 1 ? styles.color_unit_selected : styles.color_unit_unselected}>unidade</TextUnit>
                            </ContentUnit>
                            <ContentUnit
                                activeOpacity={0.8}
                                style={optionUnit.unselected === 1 ? styles.background_unit_selected : styles.background_unit_unselected}
                                onPress={() => selectUnit("kg")}>
                                <TextUnit style={optionUnit.unselected === 1 ? styles.color_unit_selected : styles.color_unit_unselected}>kg</TextUnit>
                            </ContentUnit>
                        </ContainerUnit>

                        {
                            items.length > 0 &&
                            <ContainerSelect>
                                <CheckBox
                                    checked={checked}
                                    containerStyle={styles.checkbox_wrapper}
                                    center
                                    checkedTitle={
                                        (checkedItems.length > 0 && checkedItems.length < 2) ?
                                            `${checkedItems.length} Selecionado` :
                                            `${checkedItems.length} Selecionados`
                                    }
                                    textStyle={checked ? styles.checkbox_title_checked : styles.checkbox_title}
                                    title="Selecionar itens"
                                    onPress={handleVisibleSelectedItems}
                                    iconType="material-community"
                                    checkedIcon="checkbox-outline"
                                    uncheckedIcon={'checkbox-blank-outline'}
                                    checkedColor={theme.colors.tertiary}
                                />
                            </ContainerSelect>
                        }

                    </ContainerUnitAndSelect>
                    :
                    <Text style={styles.text_top_new_lists}>Comece criando um item para a sua lista</Text>
                }

                <NameList onPress={() => setModalVisible(true)} style={listName ? styles.container_name_list : null}>{listName}</NameList>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollview_container}
                >
                    <ContainerContentItems>
                        <ContainerList>
                            {items.map((item, index) =>
                                <ContainerItemsList key={index}>

                                    {
                                        visibleCheckedItem &&
                                        <CheckBox
                                            checked={checkedItems.includes(index)}
                                            containerStyle={styles.checkbox_wrapper}
                                            center
                                            size={28}
                                            checkedColor={theme.colors.background}
                                            onPress={() => handleToggleItemCheckbox(index)}
                                            iconType="material-community"
                                            checkedIcon="checkbox-outline"
                                            uncheckedIcon={'checkbox-blank-outline'}
                                            uncheckedColor={theme.colors.accent}
                                        />
                                    }

                                    <ContainerContentList style={styles.container_content_list}>
                                        <ContainerListLeft style={styles.container_items_left}>
                                            <NameItem style={styles.name_item}>{item.name}</NameItem>
                                            <NameItem style={styles.name_item_unit}>{item.unit === "unidade" ? "unid." : item.unit}</NameItem>
                                        </ContainerListLeft>

                                        <TouchableOpacity onPress={() => handleEditItem(index)}>
                                            <FontAwesome6
                                                name="edit"
                                                size={22}
                                                color={theme.colors.background} />
                                        </TouchableOpacity>
                                    </ContainerContentList>
                                </ContainerItemsList>

                            )}
                        </ContainerList>
                    </ContainerContentItems>
                </ScrollView>

            </ContainerContentNewList>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <ButtonCloseModal onPress={() => setModalVisible(false)}>
                            <Ionicons
                                name="close-circle"
                                size={24}
                                color={theme.colors.color_light} />
                        </ButtonCloseModal>
                        <Text style={styles.modalText}>Digite o nome da lista</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome da lista"
                            value={listName}
                            onChangeText={setListName}
                        />
                        <TouchableOpacity
                            style={styles.button_modal}
                            activeOpacity={0.8}
                            onPress={handleCreateList}>
                            <Text style={styles.text_button_modal}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {
                checkedItems.length > 0 ?
                    <ButtonDelete
                        activeOpacity={0.8}
                        onPress={handleDeleteItems}
                    >
                        <FontAwesome5 name="trash-alt" size={26} color={theme.colors.color_light} />
                    </ButtonDelete>
                    :
                    (checkedItems.length === 0 && items.length > 0) &&
                    <SaveList
                        activeOpacity={0.8}
                        onPress={handleCreateListInDataBase}
                    >
                        <Entypo name="shopping-cart" size={26} color={theme.colors.background} />
                        <Text style={styles.save_list_text}>Salvar</Text>
                    </SaveList>
            }

            {
                message.length > 0 &&
                <MessageBoxItemsDeleted>
                    <MessageBoxItemsDeletedText>{message}</MessageBoxItemsDeletedText>
                    <Progress
                        progress={progress}
                        setProgress={setProgress}
                    />
                </MessageBoxItemsDeleted>
            }

            {
                createNewList &&
                <MessageBoxItemsDeleted style={styles.box_create_newlist}>
                    <ButtonCloseModal onPress={() => setCreateNewList(false)}>
                        <Ionicons
                            name="close-circle"
                            size={24}
                            color={theme.colors.background} />
                    </ButtonCloseModal>
                    <MessageBoxItemsDeletedText>Deseja acessar a <Text onPress={() => nav.navigate("mylists")} style={styles.text_new_list}>nova lista</Text> criada?</MessageBoxItemsDeletedText>
                </MessageBoxItemsDeleted>
            }


            <Modal
                animationType="fade"
                transparent={true}
                visible={load}
                onRequestClose={() => {
                    setLoad(!load);
                }}
            >
                <View style={styles.background_opacity}>

                    {
                        success ?
                            <View style={styles.success_create}>
                                <AntDesign name="checkcircle" size={80} color={theme.colors.tertiary} />
                            </View>
                            :
                            <LoadingIn colorLoading={theme.colors.background} />
                    }

                </View>
            </Modal>


        </ContainerNewList>
    );
}

export default NewList;
