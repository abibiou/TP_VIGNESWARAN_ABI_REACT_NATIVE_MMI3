TP_VIGNESWARAN_ABI_REACT_NATIVE_MMI3
Consigne du TP : 
Proposer un premier screen d'accueil de cette application
 Créer les pages suivantes :
- Liste des lycées de l'académie de Créteil
- Liste des lycées privés de la région parisienne
- Nombre de chaque type de lycées : LP PR, LPO, LGT
- Les adresses mail des lycée de l'académie de Versailles
- Le nombre de lycées des académies de la région parisienne


Erreur rencontrer : 
Le ScrollView et le FlatList créent des conflits, l'utilisation du nestedScrollEnabled={true} permet au ScrollView de scroller, et scrollEnabled={false} va permettre de désactiver le scroll du FlatList et uniquement d'afficher la liste.

<img width="518" height="177" alt="image" src="https://github.com/user-attachments/assets/e7632516-479f-4987-bf9f-44d78e035096" /># 
