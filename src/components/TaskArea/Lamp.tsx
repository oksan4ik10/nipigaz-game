interface IProps {
    check: boolean;
}
export const Lamp = (props: IProps) => {
    const color = !props.check ? "#C00000" : "#99CC00";
    
    return <>
        <svg width="26" height="33" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9232 2.32848C12.7366 2.32848 12.588 2.1797 12.588 1.99287V0.335605C12.588 0.148773 12.7366 0 12.9232 0C13.1098 0 13.2584 0.148773 13.2584 0.335605V1.99287C13.2584 2.1797 13.1098 2.32848 12.9232 2.32848Z" fill={color}/>
            <path d="M20.6528 5.53585C20.5664 5.53585 20.48 5.50471 20.4143 5.43897C20.283 5.3075 20.283 5.09645 20.4143 4.96498L21.5857 3.79209C21.717 3.66061 21.9278 3.66061 22.0591 3.79209C22.1904 3.92356 22.1904 4.13461 22.0591 4.26609L20.8877 5.43897C20.8255 5.50471 20.7391 5.53585 20.6528 5.53585Z" fill={color}/>
            <path d="M4.02208 22.1881C3.9357 22.1881 3.84931 22.157 3.78366 22.0912C3.65235 21.9598 3.65235 21.7487 3.78366 21.6172L4.95503 20.4443C5.08633 20.3129 5.29711 20.3129 5.42842 20.4443C5.55972 20.5758 5.55972 20.7869 5.42842 20.9183L4.25704 22.0912C4.19485 22.1535 4.10846 22.1881 4.02208 22.1881Z" fill={color}/>
            <path d="M25.511 13.2755H23.8559C23.6693 13.2755 23.5207 13.1267 23.5207 12.9399C23.5207 12.753 23.6693 12.6042 23.8559 12.6042H25.511C25.6976 12.6042 25.8462 12.753 25.8462 12.9399C25.8462 13.1267 25.6941 13.2755 25.511 13.2755Z" fill={color}/>
            <path d="M1.99029 13.2755H0.335171C0.148581 13.2755 0 13.1267 0 12.9399C0 12.753 0.148581 12.6042 0.335171 12.6042H1.99029C2.17688 12.6042 2.32546 12.753 2.32546 12.9399C2.32546 13.1267 2.17688 13.2755 1.99029 13.2755Z" fill={color}/>
            <path d="M21.8241 22.1881C21.7377 22.1881 21.6514 22.157 21.5857 22.0912L20.4143 20.9183C20.283 20.7869 20.283 20.5758 20.4143 20.4443C20.5456 20.3129 20.7564 20.3129 20.8877 20.4443L22.0591 21.6172C22.1904 21.7487 22.1904 21.9598 22.0591 22.0912C21.9934 22.1535 21.9105 22.1881 21.8241 22.1881Z" fill={color}/>
            <path d="M5.19345 5.53585C5.10707 5.53585 5.02068 5.50471 4.95503 5.43897L3.78366 4.26609C3.65235 4.13461 3.65235 3.92356 3.78366 3.79209C3.91496 3.66061 4.12574 3.66061 4.25704 3.79209L5.42842 4.96498C5.55972 5.09645 5.55972 5.3075 5.42842 5.43897C5.36622 5.50471 5.27983 5.53585 5.19345 5.53585Z" fill={color}/>
            <path d="M17.1456 3.17965C17.1007 3.17965 17.0592 3.17273 17.0177 3.15197C16.8484 3.07931 16.7655 2.8821 16.8381 2.71257L17.4773 1.18332C17.5499 1.01379 17.7468 0.930749 17.9161 1.00341C18.0854 1.07606 18.1684 1.27327 18.0958 1.44281L17.4566 2.97206C17.4013 3.10353 17.2769 3.17965 17.1456 3.17965Z" fill={color}/>
            <path d="M23.037 9.12719C22.9057 9.12719 22.7813 9.04761 22.726 8.9196C22.6569 8.74661 22.7364 8.55286 22.9092 8.4802L24.4433 7.85051C24.6161 7.78131 24.8096 7.86089 24.8822 8.03388C24.9513 8.20687 24.8718 8.40062 24.699 8.47328L23.1649 9.09951C23.1234 9.11681 23.0819 9.12719 23.037 9.12719Z" fill={color}/>
            <path d="M1.27504 18.0535C1.14374 18.0535 1.01935 17.974 0.964061 17.8459C0.894954 17.673 0.974427 17.4792 1.1472 17.4065L2.68138 16.7803C2.85415 16.7111 3.04765 16.7907 3.12021 16.9637C3.18932 17.1367 3.10985 17.3304 2.93708 17.4031L1.40289 18.0328C1.36143 18.0466 1.31651 18.0535 1.27504 18.0535Z" fill={color}/>
            <path d="M24.5331 18.1435C24.4882 18.1435 24.4468 18.1366 24.4053 18.1158L22.878 17.4758C22.7087 17.4031 22.6258 17.2059 22.6983 17.0364C22.7709 16.8668 22.9679 16.7838 23.1372 16.8565L24.6645 17.4965C24.8338 17.5692 24.9167 17.7664 24.8441 17.9359C24.7888 18.064 24.6645 18.1435 24.5331 18.1435Z" fill={color}/>
            <path d="M2.8404 9.04755C2.79548 9.04755 2.75402 9.04063 2.71255 9.01987L1.18528 8.3798C1.01597 8.30714 0.933037 8.10993 1.0056 7.9404C1.07816 7.77087 1.27512 7.68783 1.44443 7.76049L2.9717 8.40056C3.14102 8.47321 3.22395 8.67043 3.15138 8.83996C3.0961 8.97143 2.9717 9.04755 2.8404 9.04755Z" fill={color}/>
            <path d="M8.7766 3.14854C8.6453 3.14854 8.5209 3.06896 8.46562 2.94095L7.83674 1.40478C7.76763 1.23178 7.84711 1.03803 8.01988 0.965375C8.19264 0.896178 8.38615 0.975755 8.45871 1.14875L9.08759 2.68492C9.15669 2.85791 9.07722 3.05166 8.90445 3.12432C8.86299 3.13816 8.82152 3.14854 8.7766 3.14854Z" fill={color}/>
            <path d="M15.8602 28.9174H10.1934C9.87201 28.9174 9.61285 28.6579 9.61285 28.3361C9.61285 28.0143 9.87201 27.7549 10.1934 27.7549H15.8602C16.1815 27.7549 16.4407 28.0143 16.4407 28.3361C16.4407 28.6579 16.1815 28.9174 15.8602 28.9174Z" fill={color}/>
            <path d="M15.8602 30.7373H10.1934C9.87201 30.7373 9.61285 30.4778 9.61285 30.1561C9.61285 29.8343 9.87201 29.5748 10.1934 29.5748H15.8602C16.1815 29.5748 16.4407 29.8343 16.4407 30.1561C16.4407 30.4778 16.1815 30.7373 15.8602 30.7373Z" fill={color}/>
            <path d="M11.655 31.4223C11.5133 31.4223 11.4096 31.5503 11.4338 31.6887C11.572 32.4361 12.2251 33 13.0129 33C13.8007 33 14.4538 32.4361 14.592 31.6887C14.6162 31.5503 14.5125 31.4223 14.3709 31.4223H11.655Z" fill={color}/>
            <path d="M15.2624 27.0283H10.7116C9.92382 27.0283 9.26039 26.4125 9.20165 25.6236C9.00814 23.0564 7.96117 21.4303 6.85545 19.7073C5.64607 17.8286 4.39868 15.8876 4.39868 12.7461C4.39868 8.50429 7.42904 4.93373 11.6031 4.25906C12.5775 4.09991 13.6072 4.11374 14.5782 4.29366C18.6348 5.05136 21.5788 8.60463 21.5788 12.7426C21.5788 15.8841 20.3279 17.8251 19.122 19.7038C18.0128 21.4268 16.9659 23.0529 16.7758 25.6202C16.7136 26.4125 16.0502 27.0283 15.2624 27.0283Z" fill={color}/>
            <path d="M8.82503 18.1331C8.65226 18.1331 8.48295 18.0535 8.37238 17.9012C5.26946 13.6318 7.55691 9.62529 7.65712 9.45922C7.81261 9.19281 8.15469 9.10286 8.42075 9.26201C8.68682 9.4177 8.77666 9.76023 8.62117 10.0266C8.53478 10.1754 6.61705 13.5868 9.27769 17.2439C9.46082 17.493 9.40553 17.8424 9.15329 18.0258C9.05309 18.0985 8.93906 18.1331 8.82503 18.1331Z" fill="white"/>
        </svg>

    </>
}