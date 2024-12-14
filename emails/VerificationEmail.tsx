import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Heading,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
      </Head>
      <Preview>Here your verification code: {otp}</Preview>
      <Body>
        <Container>
          <Section>
            <Row>
              <Heading>Hello {username},</Heading>
            </Row>
            <Row>
              <Text>
                Thank you for registering. Please use the following verification
                code to complete your registration:
              </Text>
            </Row>
            <Row>
              <Text
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "10px",
                  borderRadius: "5px",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                {otp}
              </Text>
            </Row>
            <Row>
              <Text>
                If you did not request this code, please ignore this email.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
