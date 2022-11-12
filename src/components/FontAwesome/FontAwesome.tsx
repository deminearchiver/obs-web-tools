import React from 'react'

export const FAIcon = ({ name, type, sharp, className }: FABaseIconOptions) => {

  return (
    <i className={`fa-${name} fa-${type} ${sharp ? "fa-sharp" : ""} ${className ? className : ""}`}></i>
  )
}

// Icon types

export const FABIcon = ({ name, className }: Omit<FAIconOptions, "sharp">) => {
  return (
    <FAIcon name={name} type="brands" className={className} />
  )
}

export const FASIcon = ({ name, sharp, className }: FAIconOptions) => {
  return (
    <FAIcon name={name} sharp={sharp} type="solid" className={className}/>
  )
}
export const FARIcon = ({ name, sharp, className }: FAIconOptions) => {
  return (
    <FAIcon name={name} sharp={sharp} type="regular" className={className}/>
  )
}
export const FALIcon = ({ name, sharp, className }: FAIconOptions) => {
  return (
    <FAIcon name={name} sharp={sharp} type="light" className={className}/>
  )
}
export const FATIcon = ({ name, sharp, className }: FAIconOptions) => {
  return (
    <FAIcon name={name} sharp={sharp} type="thin" className={className}/>
  )
}
export const FADIcon = ({ name, sharp, className }: FAIconOptions) => {
  return (
    <FAIcon name={name} sharp={sharp} type="duotone" className={className}/>
  )
}


// Icon options

interface FAIconOptions {
  name: string;
  className?: string;
  sharp?: boolean;
}

interface FABaseIconOptions extends FAIconOptions {
  type: FAIconTypes;
}

type FAIconTypes = "solid" | "regular" | "light" | "thin" | "duotone" | "brands";