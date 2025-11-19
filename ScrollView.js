//Example 2: ScrollView

//In this second example, we use a ScrollView component to create a scrollable view. Inside the ScrollView, we have multiple View components representing the items. Each item is displayed using a Text component. 

const ScrollViewExample = () => {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text>Item 1</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 2</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 3</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 4</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 5</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 6</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 7</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 8</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 9</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 10</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 11</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 12</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 13</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 14</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 15</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 16</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text>Item 17</Text>
      </View>
    </ScrollView>
  );
};

export default ScrollViewExample;

//The content inside the ScrollView is manually provided without using a data array or dynamic rendering like in the FlatList example.

