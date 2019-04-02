import React, { Component } from 'react';
import { KeyboardAvoidingView, ImageBackground, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';
import { titleCreate, titleUpdate } from '../actions';


class titleForm extends Component {

    onButtonPress() {
        const { Title } = this.props;
  
        this.props.titleCreate({ Title });
    }

    render() {
        return (
            <ImageBackground
                source={require('./image_assets/title/title.jpg')}
                style={styles.backgroundimage}
            >
                <KeyboardAvoidingView style={styles.BackgroundStyle} enables>
                    <View style={styles.overlayConatiner}>
                        <View style={{ top: '150%', justifyContent: 'center' }}>
                            <Card style={{ borderColor: 'rgba(255,255,255, .1)' }}>
                                <CardSection style={{ backgroundColor: 'rgba(255,255,255, .1)' }}>
                                <Input
                                    label="Title"
                                    style={{ color: '#fff', fontSize: 18 }}
                                    placeholder='eg: Web Developer'
                                    value={this.props.Title}
                                    onChangeText={value => this.props.titleUpdate({ prop: 'Title', value })}
                                />
                                </CardSection>
                            </Card>   
                            <View style={{ paddingTop: '10%' }}>
                                <Card style={{ borderColor: 'rgba(255,255,255, .1)' }}>
                                    <CardSection style={{ alignSelf: 'center' }}>
                                        <Button
                                            title="Save"
                                            color='rgba(0,0,0,1)'
                                            onPress={this.onButtonPress.bind(this)}
                                        />
                                    </CardSection>
                                </Card>
                            </View>         
                        </View>
                       
                    </View>
                </KeyboardAvoidingView>
            
            </ImageBackground>
        );
    }
}

const styles = {
    backgroundimage: {
        flex: 1,
        width: '100%',
        height: '100%'
      },
      BackgroundStyle: {
        flex: 1,
        flexDirection: 'column'
      },
      overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47, 164, 218, 1)'
      }
};

const mapStateToProps = (state) => {
    const { Title } = state.titleForm;

    return { Title };
};

export default connect(mapStateToProps, { titleCreate, titleUpdate })(titleForm);
