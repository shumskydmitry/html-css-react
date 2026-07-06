import sprite from "@/assets/icons/sprite.svg"

type IconProps = {
    iconId: string;
}

export const Icon = ({iconId}: IconProps) => {
    return (
        <svg aria-hidden>
            <use href={`${sprite}#${iconId}`}/>
        </svg>
    )
}