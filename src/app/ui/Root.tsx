type Props = {
  maior?: boolean,
  children: React.ReactNode
}

export function Root({
  children,
  maior
}: Props){

  return(
    <div className={`w-[90vw] md:w-[460px] p-3 ${maior ? 'md:flex-1': ''}`}
    // className="w-[90vw] md:w-[460px] p-3"
    >
      {children}
    </div>
  )
}