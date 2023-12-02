type Props = {
  maior?: boolean,
  children: React.ReactNode
}

export function Root({
  children,
  maior
}: Props){

  return(
    <div className={`w-[90vw] md:w-[460px] px-8 ${maior ? 'md:flex-1': ''} ${maior ? 'md:border-r': ''} border-neutral-700`}
    >
      {children}
    </div>
  )
}