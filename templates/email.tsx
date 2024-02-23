import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text
} from 'jsx-email';
import {preset} from '../unocss.config'

export type TemplateProps = {
  email: string;
  name: string;
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  marginBottom: '64px',
  padding: '20px 0 48px'
};

const box = {
  padding: '0 48px'
};


export const defaultProps = {
  email: 'batman@example.com',
  name: 'Bruce Wayne'
} as TemplateProps;

export const templateName = 'email-cjs-error';

export const Template = ({ email, name }: TemplateProps) => (
  <Tailwind config={{presets: [preset]}}>
    <Html>
      <Head />
      <Preview>This is our email preview text for {name} &lt;{email}&gt;</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Text disableDefaultStyle className='text-xl'>title</Text>
            <Button className='bg-red text-white p-4 rounded' href="https://example.com">
              Action Button
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);
