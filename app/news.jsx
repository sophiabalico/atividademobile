import { View, Text, Image} from "react-native";

export default function News() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", width: 350, marginBottom: 400 }}>
        Biocarvão de laranjas pode ajudar no tratamento de água contaminada,
        indica estudo
      </Text>
      <Text style={{ width: 350, fontSize: 10, textAlign: "justify", marginBottom: 50}}>
        O Brasil é o maior produtor mundial de laranjas, e esse setor
        agroindustrial gera uma abundância de resíduos e subprodutos. Um novo
        estudo da Universidade Federal de São Carlos (Ufscar) indica que esses
        resíduos podem ser reaproveitados para o tratamento de água de forma
        sustentável. A pesquisa detalha que o processo exige a produção do
        biocarvão da laranja, ou seja, um produto da queima do bagaço e casca da
        fruta, que passa por etapas como secagem, moagem, peneiração e pirólise
        – a decomposição termoquímica de resíduos orgânicos.
      </Text>
      <Image source={{ uri: 'https://classic.exame.com/wp-content/uploads/2024/11/ED1269_AGRO2.jpg?ims=750x/filters:quality(85):format(webp)' }} />
    </View>
  );
}
