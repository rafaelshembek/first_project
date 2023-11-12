import { useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList,TouchableOpacity} from 'react-native';
import { TextInput } from "react-native";
import List from './components/List';

export default function App() {
  
const [item, setItem] = useState('');
const [tasks, setTasks] = useState([])

let newItem
newItem = new List()
const btnItem = () => {

  // newItem.getDados(item)
  setItem('')
  if(item !== '')
  {
    setTasks([...tasks, {text: item, done: false}])
    setItem('')
  }
}

const delItem = () => {
  
}
// useEffect( () => {
//   tasks.map( e => console.log(e) )
// },[tasks])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.portfolio}>Minhas Tarefas</Text>
      </View>
      <View style={styles.header}>
       
      </View>
      <View style={styles.body}>
        <View style={styles.titleBody}>
          <Text style={styles.title}>Sua Lista</Text>
        </View>
        
          <FlatList 
            showsVerticalScrollIndicator={false}
            data={tasks}
              renderItem={({item}) => <>
                <TouchableOpacity onPress={delItem} style={styles.listItem}>
                 
                    <Text style={styles.itemText}>{item.text}</Text>
                </TouchableOpacity>
              </>
            
          } />
          <View style={styles.cardInput}>
            
            <TextInput 
              value={item} 
              onChangeText={(text) => setItem(text)} style={styles.inputText} placeholder="Nova Tarefa" 
            />
            
            <TouchableOpacity style={styles.btnEnviar} onPress={btnItem}>
              <Text style={styles.titleEnviar}>Enviar</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#7531F4',
    // backgroundColor: '#7C28FF',
    flexDirection:"column",
  },
  body:{
    flex:1,
    flexDirection:"column",
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    backgroundColor:"#fff",
    padding:5,
    marginTop:20,

  },
  title:{
    fontSize:20,
    marginLeft:60
  },
  titleBody:{
    flexDirection:"row",
    height:50,
    justifyContent:"flex-start",
    alignItems:"center"
  },
  listItem:{
    backgroundColor:"#7531F4",
    margin:5,
    padding:5,
    borderRadius:50
  },
  itemText:{
    fontSize:20,
    padding:12,
    fontWeight:"500",
    color:"#fff"
  },
  logo:{
    marginTop:45,
    marginLeft:35
  },
  portfolio:{
    color:"#fff",
    fontSize:14,
    // fontFamily:'Agbalumo Regular'
  },
  header:{
    marginLeft:15,
    marginTop:20
  },
  cardInput:{
    flexDirection:"row",
  },
  inputText:{
    fontSize:20,
    height:40,
    paddingLeft:8,
    borderRadius:8,
    borderColor:"#999",
    borderBottomWidth:1,
    width:"80%"
  },
  btnEnviar:{
    backgroundColor:"#7C28FF",
    padding:10,
    borderRadius:5,
    marginLeft:5
  },
  titleEnviar:{
    color:"#fff"
  }
});
