import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';

class TitleItem extends Component {
    render() {
        const { Title } = this.props.title.item;
        return (
            <Card>
                <CardSection>
                    {Title}
                </CardSection>
            </Card>
        );
    }
}

export default TitleItem;
