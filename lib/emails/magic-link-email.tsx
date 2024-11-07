import { Button, Container, Heading, Html, Tailwind, Text } from '@react-email/components'

export function MagicLinkEmail ({ url }: {
  url: string
}) {
  const { host } = new URL(url)
  return (
    <Html>
      <Heading />
      <Tailwind>
        <Container>
          <Text>
            Inicia sesión en {host}
          </Text>
          <Button
            href={url}
            style={{ background: '#000', color: '#fff', padding: '12px 20px' }}
          >
            Iniciar Sesión
          </Button>
        </Container>
      </Tailwind>
    </Html>
  )
}
