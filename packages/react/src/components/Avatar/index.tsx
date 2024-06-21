import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size: 'default' | 'large'
}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer size={props.size}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
