import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native';
import {Alert, Button} from 'react-native';

// export default
class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello, world!</Text>
        <Image source={pic} style={{width: 193, height: 110}} />
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 200}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

// export default
class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name="Rexxar" />
        <Greeting name="Jaina" />
        <Greeting name="Valeera" />
      </View>
    );
  }
}

class Blink extends Component {
  // 声明state对象
  state = {isShowingText: true};

  componentDidMount() {
    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState({
        isShowingText: !this.state.isShowingText,
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    if (!this.state.isShowingText) {
      return null;
    }

    return <Text>{this.props.text}</Text>;
  }
}

// export default
class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="I love to blink" />
        <Blink text="Yes blinking is so great" />
        <Blink text="Why did they ever take this out of HTML" />
        <Blink text="Look at me look at me look at me" />
      </View>
    );
  }
}

// export default
class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

// export default
class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// export default
class FlexDimensionsBasics extends Component {
  render() {
    return (
      //   <View style={{flex: 1}}>
      <View style={{height: 300}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// more aboud flexbox: https://reactnative.cn/docs/flexbox/
// export default
class FlexDirectionBasics extends Component {
  render() {
    return (
      //   <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{width: 100, height: 100, backgroundColor: 'powderblue'}}
        />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// export default
class JustifyContentBasics extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        {/* <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}> */}
        <View style={{width: 50, height: 200, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 200, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 200, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// export default
class AlignItemsBasics extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, backgroundColor: 'steelblue'}} />
        <View
          style={{
            width: 50,
            height: 50,
            alignSelf: 'flex-start',
            backgroundColor: 'skyblue',
          }}
        />
        <View
          style={{
            width: 50,
            height: 50,
            alignSelf: 'flex-end',
            backgroundColor: 'powderblue',
          }}
        />
        <View
          style={{
            width: 50,
            height: 50,
            alignSelf: 'center',
            backgroundColor: 'steelblue',
          }}
        />
        <View
          style={{
            height: 50,
            alignSelf: 'stretch',
            backgroundColor: 'skyblue',
          }}
        />
      </View>
    );
  }
}

// export default
class PizzaTranslator extends Component {
  state = {
    text: '',
  };

  render() {
    return (
      <View style={{padding: 100}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text
            .split(' ')
            .map(word => word && '🍕')
            .join(' ')}
        </Text>
      </View>
    );
  }
}

// export default
class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <View style={styles2.container}>
        <View style={styles2.buttonContainer}>
          <Button onPress={this._onPressButton} title="Press Me" />
        </View>
        <View style={styles2.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles2.alternativeLayoutButtonContainer}>
          <Button onPress={this._onPressButton} title="This looks great!" />
          <Button onPress={this._onPressButton} title="OK!" color="#841584" />
        </View>
      </View>
    );
  }
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

import {
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

// export default
class Touchables extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  render() {
    return (
      <View style={styles3.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles3.button}>
            <Text style={styles3.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles3.button}>
            <Text style={styles3.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={
            Platform.OS === 'android'
              ? TouchableNativeFeedback.SelectableBackground()
              : ''
          }>
          <View style={styles3.button}>
            <Text style={styles3.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <View style={styles3.button}>
            <Text style={styles3.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight
          onPress={this._onPressButton}
          onLongPress={this._onLongPressButton}
          underlayColor="white">
          <View style={styles3.button}>
            <Text style={styles3.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles3 = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});

import {ScrollView} from 'react-native';

// export default
class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Text style={{fontSize: 96}}>If you like</Text>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Text style={{fontSize: 96}}>Scrolling down</Text>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Text style={{fontSize: 96}}>What's the best</Text>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Text style={{fontSize: 96}}>Framework around?</Text>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            width: 64,
            height: 64,
          }}
        />
        <Text style={{fontSize: 80}}>React Native</Text>
      </ScrollView>
    );
  }
}

import {FlatList} from 'react-native';

// export default
class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles4.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles4.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles4 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

import {SectionList} from 'react-native';

// export default
class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles5.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {
              title: 'J',
              data: [
                'Jackson',
                'James',
                'Jillian',
                'Jimmy',
                'Joel',
                'John',
                'Julie',
              ],
            },
          ]}
          renderItem={({item}) => <Text style={styles5.item}>{item}</Text>}
          renderSectionHeader={({section}) => (
            <Text style={styles5.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles5 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

import {ActivityIndicator} from 'react-native';

// export default
class FetchExample extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        'https://facebook.github.io/react-native/movies.json',
      );
      const responseJson = await response.json();
      this.setState(
        {
          isLoading: false,
          dataSource: responseJson.movies,
        },
        function() {},
      );
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}

const REQUEST_URL =
  'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

export default class SampleAppMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          data: this.state.data.concat(responseData.movies),
          loaded: true,
        });
      });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles6.list}
        keyExtractor={item => item.id}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles6.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  }

  renderMovie({item}) {
    // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
    return (
      <View style={styles6.container}>
        <Image
          source={{uri: item.posters.thumbnail}}
          style={styles6.thumbnail}
        />
        <View style={styles6.rightContainer}>
          <Text style={styles6.title}>{item.title}</Text>
          <Text style={styles6.year}>{item.year}</Text>
        </View>
      </View>
    );
  }
}

const styles6 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
