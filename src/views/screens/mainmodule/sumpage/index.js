import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import SumContentPageStyle from './Styles';
import { doSum } from '../redux/MainModuleAction';
import InputText from '../components/InputText';
import TinyTextButton from '../components/TinyTextButton';

class SumContentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };
  }

  onPressSum() {
    const { doSum: doSumAction } = this.props;
    const { x, y } = this.state;
    const data = { inputX: x, inputY: y };
    doSumAction(data);
  }

  render() {
    const { sumResult } = this.props;
    const styles = SumContentPageStyle;

    return (
      <View style={styles.container}>
        <InputText
          title="Input X"
          onChangeText={text => {
            this.setState({
              x: text
            });
          }}
        />
        <InputText
          title="Input Y"
          onChangeText={text => {
            this.setState({
              y: text
            });
          }}
        />
        <TinyTextButton name="SUM" onPress={() => this.onPressSum()} />
        {sumResult ? (
          <View style={styles.resultTextContainer}>
            <Text style={styles.resultTextTitle}>Number Sum Result</Text>
            <Text style={styles.resultText}>{sumResult || ''}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  sumResult: state.mainModule.sumResult
});

const mapDispatchToProps = {
  doSum
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SumContentPage);
