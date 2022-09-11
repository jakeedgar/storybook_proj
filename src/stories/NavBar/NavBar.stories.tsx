import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavBar from '../../components/NavBar';

export default {
  title: 'NavBar',
  Component: NavBar,
    argTypes: {
    login: { control: 'string' }
  }
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => 
<NavBar 
  {...args}
  login='log up bro'
/>;

export const NavBarMain = Template.bind({});
NavBarMain.args = {
};