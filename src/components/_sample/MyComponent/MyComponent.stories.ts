import { MyComponent } from './MyComponent';

// コンポーネントの引数の型を定義
type MyComponentProps = {
  message: string;
  color: string;
  size: 'small' | 'medium' | 'large';
};

export default {
  title: 'Components/MyComponent',
  component: 'my-component',
  argTypes: {
    message: { control: 'text' },
    color: { control: 'color' },
    size: { 
      control: 'select', 
      options: ['small', 'medium', 'large'] 
    },
  },
};

// テンプレートの型を明示的に定義
const Template = (args: MyComponentProps) => new MyComponent();

// Story型を定義して型キャストをシンプルに
type Story = typeof Template & { args: MyComponentProps };

export const Default = Template.bind({}) as Story;
Default.args = {
  message: "Hello, Storybook!",
  color: 'blue',
  size: 'medium',
};

export const Small = Template.bind({}) as Story;
Small.args = {
  message: "This is small text.",
  color: 'red',
  size: 'small',
};
