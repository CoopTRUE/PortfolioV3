import Root from './button.svelte'
import type { Button as ButtonPrimitive } from 'bits-ui'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default: 'border-primary text-foreground hover:bg-primary/60',
      ghost: 'border-muted text-muted hover:bg-muted/60',
      // destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      // outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      // secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      // ghost: 'hover:bg-accent hover:text-accent-foreground',
      // link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      default: 'px-4 py-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type Variant = VariantProps<typeof buttonVariants>['variant']
type Size = VariantProps<typeof buttonVariants>['size']

type Props = ButtonPrimitive.Props & {
  variant?: Variant
  size?: Size
}

type Events = ButtonPrimitive.Events

export {
  Root,
  type Props,
  type Events,
  //
  Root as Button,
  type Props as ButtonProps,
  type Events as ButtonEvents,
  buttonVariants,
}
