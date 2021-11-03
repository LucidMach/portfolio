import social from "../styles/social.module.css";

const icons = {
  twitter: (
    <svg
      className={social.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
    >
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg>
  ),
  github: (
    <svg
      className={social.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  youtube: (
    <svg
      className={social.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
    >
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  ),
  insta: (
    <svg
      className={social.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  dev: (
    <svg
      className={social.icon}
      viewBox="0 32 447.99999999999994 448"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
    >
      <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z" />
    </svg>
  ),
  thingiverse: (
    <svg
      className={social.icon}
      height="36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="256.962" cy="256.962" fill="#2a2a2a" r="237.714" />
        <path
          d="M256 512C114.615 512 0 397.385 0 256S114.615 0 256 0s256 114.615 256 256-114.615 256-256 256zm0-36.571c121.187 0 219.429-98.242 219.429-219.429S377.187 36.571 256 36.571 36.571 134.813 36.571 256 134.813 475.429 256 475.429zm32.722-269.474v219.428h-65.444V205.955h-92.39V140.51h250.225v65.444z"
          fill="#fff100"
        />
      </g>
    </svg>
  ),
  open: (
    <svg
      className={social.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
    >
      <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
    </svg>
  ),
  download: (
    <svg
      className={social.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M17 13h6l-11 11-11-11h6v-13h10z" />
    </svg>
  ),
  opensea: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 15C30 23.2838 23.2838 30 15 30C6.71619 30 0 23.2838 0 15C0 6.71619 6.71619 0 15 0C23.2856 0 30 6.71619 30 15ZM7.40038 15.504L7.46509 15.4023L11.3672 9.29796C11.4242 9.20859 11.5583 9.21783 11.6014 9.31491C12.2533 10.7759 12.8158 12.5929 12.5523 13.724C12.4398 14.1895 12.1316 14.8198 11.7848 15.4023C11.7401 15.4871 11.6908 15.5703 11.6384 15.6504C11.6138 15.6874 11.5721 15.709 11.5274 15.709H7.51441C7.40653 15.709 7.34335 15.5919 7.40038 15.504ZM24.7933 17.6046V16.6383C24.7933 16.5489 24.707 16.4842 24.6223 16.5089L20.0591 17.828C20.0344 17.8342 20.0128 17.848 19.9958 17.8666C19.5071 18.4064 19.0918 18.7687 18.9817 18.8647L18.9741 18.8713C18.6905 19.1118 18.3391 19.2428 17.9693 19.2428H16.3172V17.5583H17.6303C17.6642 17.5583 17.6965 17.546 17.7212 17.5244L17.8907 17.3688C17.9631 17.3025 18.0494 17.2224 18.1527 17.1191C18.1614 17.1103 18.1703 17.1015 18.1793 17.0925C18.2336 17.0385 18.2916 16.9807 18.3484 16.9172C18.4162 16.851 18.4825 16.777 18.5441 16.7046C18.6474 16.5936 18.746 16.478 18.8493 16.3563C18.9233 16.2761 18.9911 16.1852 19.0573 16.0943C19.1313 16.008 19.2037 15.9109 19.2715 15.8184C19.2968 15.7813 19.3236 15.7438 19.3511 15.7055C19.3773 15.669 19.4039 15.6318 19.4303 15.5934C19.4796 15.5195 19.5289 15.4409 19.5705 15.3669C19.7 15.1665 19.8094 14.9523 19.9019 14.7381C19.9443 14.6464 19.9782 14.5498 20.0112 14.4558C20.0153 14.4441 20.0195 14.4323 20.0236 14.4206C20.0606 14.3112 20.0914 14.208 20.1145 14.0985C20.17 13.8412 20.1823 13.5854 20.1577 13.3295C20.1515 13.2494 20.1453 13.1708 20.1269 13.0968V13.0845C20.1207 13.0321 20.1083 12.9735 20.0914 12.9196C20.0359 12.6699 19.9496 12.4203 19.8402 12.1752C19.8032 12.0843 19.7601 11.9918 19.7185 11.9071C19.6198 11.7237 19.5166 11.5403 19.3994 11.3631C19.3759 11.3256 19.35 11.2877 19.324 11.2498C19.3041 11.2207 19.2841 11.1916 19.2654 11.1627C19.1912 11.0483 19.1078 10.938 19.0269 10.831C19.0086 10.8068 18.9904 10.7828 18.9725 10.759C18.9248 10.6962 18.8725 10.6335 18.8199 10.5704C18.791 10.5358 18.7621 10.5011 18.7337 10.4661C18.6536 10.3691 18.575 10.2766 18.4948 10.1857C18.2082 9.86202 17.9077 9.56922 17.6395 9.31956C17.5902 9.27024 17.5362 9.22092 17.4808 9.17316C17.2727 8.98359 17.0831 8.81868 16.9244 8.69079C16.8767 8.6541 16.8339 8.61794 16.7941 8.5843C16.767 8.56141 16.7413 8.53968 16.7164 8.51973C16.6683 8.48387 16.6265 8.45207 16.5915 8.42537C16.5692 8.40844 16.5497 8.39357 16.533 8.38101C16.5206 8.37177 16.5068 8.36562 16.4929 8.36097L16.3172 8.31168V6.85686C16.3172 6.61953 16.2217 6.40686 16.0691 6.25119C15.9165 6.09555 15.7039 6 15.4696 6C15.0011 6 14.622 6.38373 14.622 6.85686V7.83699L14.5342 7.81236L14.2953 7.74453L14.078 7.68444C14.0773 7.68444 14.0767 7.68417 14.076 7.68386C14.0749 7.68342 14.0736 7.68288 14.0718 7.68288H14.0672L12.4182 7.23597C12.3458 7.21593 12.2841 7.29453 12.3211 7.3608L12.5846 7.84779C12.5996 7.88522 12.6186 7.92265 12.638 7.96111C12.6506 7.986 12.6635 8.01132 12.6756 8.03736C12.7187 8.12364 12.7619 8.21457 12.8035 8.3055C12.8405 8.38563 12.8775 8.46423 12.9206 8.55054C12.9388 8.59113 12.9573 8.63221 12.976 8.67388C13.0449 8.82682 13.1173 8.98764 13.1888 9.16083C13.2504 9.30723 13.312 9.45363 13.366 9.60621C13.514 9.98994 13.6542 10.3999 13.7759 10.8206C13.8062 10.9148 13.8305 11.0059 13.855 11.0982C13.8654 11.1374 13.8759 11.1768 13.8869 11.2167L13.9038 11.2906C13.9532 11.4864 13.9963 11.6805 14.0271 11.8763C14.0518 12.0103 14.0749 12.1382 14.0872 12.2677C14.1057 12.4141 14.1242 12.5605 14.1304 12.7069C14.1427 12.841 14.1489 12.9812 14.1489 13.1153C14.1489 13.4574 14.1181 13.7872 14.0456 14.0985C14.0411 14.1153 14.0365 14.1322 14.032 14.1493C14.0117 14.225 13.9906 14.3036 13.9655 14.379C13.9427 14.4598 13.9132 14.5407 13.8826 14.6246C13.8717 14.6543 13.8608 14.6844 13.8499 14.715C13.8479 14.7204 13.8458 14.7259 13.8438 14.7314C13.8211 14.7924 13.7981 14.8545 13.7698 14.9153C13.6172 15.2821 13.4276 15.6474 13.2319 15.9895C12.9453 16.4965 12.6571 16.9419 12.4552 17.2285C12.4428 17.2471 12.4308 17.2647 12.4192 17.2817C12.4047 17.3028 12.391 17.3229 12.3782 17.3426C12.315 17.432 12.3797 17.5583 12.4891 17.5583H14.622V19.2428H12.4644C11.885 19.2428 11.3487 18.9145 11.0898 18.389C10.9557 18.1255 10.9033 17.8357 10.9341 17.5522C10.9418 17.4674 10.8786 17.3873 10.7923 17.3873H6.43407C6.36009 17.3873 6.3 17.4474 6.3 17.5214V17.6107C6.3 20.3909 8.54541 22.644 11.3163 22.644H19.1344C20.5999 22.644 21.432 21.3086 22.2499 19.996C22.4779 19.6301 22.7048 19.2659 22.944 18.933C23.374 18.335 24.4081 17.8604 24.7101 17.7309C24.7594 17.7094 24.7933 17.66 24.7933 17.6046Z"
        fill="#FFF100"
      />
    </svg>
  ),
};

export default icons;
