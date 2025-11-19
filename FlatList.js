//Example 1: FlatList

//In this example, we have a FlatList component rendering a list of items from the data array. 

const data = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  { id: 4, title: 'Item 4' },
  { id: 5, title: 'Item 5' },
  { id: 6, title: 'Item 6' },
  { id: 7, title: 'Item 7' },
  { id: 8, title: 'Item 8' },
  { id: 9, title: 'Item 9' },
  { id: 10, title: 'Item 10' },
  { id: 11, title: 'Item 11' },
  { id: 12, title: 'Item 12' },
  { id: 13, title: 'Item 13' },
  { id: 14, title: 'Item 14' },
  { id: 15, title: 'Item 15' },
  { id: 16, title: 'Item 16' },
  { id: 17, title: 'Item 17' },
];

//Each item is wrapped in a View and displayed with a Text component.

const FlatListExample = () => {
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.title}</Text>
    </View>
  );

//The renderItem function defines the appearance of each item, and keyExtractor is used to extract unique keys for each item.

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default FlatListExample;
