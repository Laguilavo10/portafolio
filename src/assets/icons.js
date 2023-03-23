const PURPLECOLOR = '#31235e'
const BACKCOLOR = '#090e16'

export const GitHubIcon = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='800px'
      height='800px'
      viewBox='0 0 24 24'
      {...props}
      fill='#9aa2ad'
    >
      <title>github</title>
      <rect width='24' height='24' fill='none' />
      <path d='M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z' />
    </svg>
  )
}

export const LinkedinIcon = (props) => {
  return (
    <svg
      fill='#9aa2ad'
      width='800px'
      height='800px'
      viewBox='0 0 32 32'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <title>linkedin</title>
      <path d='M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z'></path>
    </svg>
  )
}

export const ResumeIcon = (props) => {
  return (
    <svg
      fill='#9aa2ad'
      width='800px'
      height='800px'
      viewBox='0 0 36 36'
      version='1.1'
      preserveAspectRatio='xMidYMid meet'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <title>export-solid</title>
      <path d='M17,22a1,1,0,0,1,1-1h8V6a2,2,0,0,0-2-2H10.87L4,10.86V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V23H18A1,1,0,0,1,17,22ZM12,12H6v-.32L11.69,6H12Z'></path>
      <path d='M29.32,16.35a1,1,0,0,0-1.41,1.41L31.16,21H26v2h5.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L35,22Z'></path>
      <rect x='0' y='0' width='36' height='36' fillOpacity='0' />
    </svg>
  )
}

export const HtmlIcon = (props) => {
  return (
    <svg
      width='800px'
      height='800px'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M6 28L4 3H28L26 28L16 31L6 28Z' fill={PURPLECOLOR} />
      <path d='M26 5H16V29.5L24 27L26 5Z' />
      <path
        d='M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z'
        fill={BACKCOLOR}
      />
    </svg>
  )
}

export const ReactIcon = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      role='img'
      width='800px'
      height='800px'
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 256 228'
      {...props}
    >
      <path
        fill={PURPLECOLOR}
        d='M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z'
      ></path>
    </svg>
  )
}

export const TailwindIcon = (props) => {
  return (
    <svg
      width='800px'
      height='800px'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <title>file_type_tailwind</title>
      <path
        d='M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z'
        fill={PURPLECOLOR}
      />
    </svg>
  )
}

export const GitIcon = (props) => {
  return (
    <svg
      width='800px'
      height='800px'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z'
        fill={PURPLECOLOR}
      />
      <path
        d='M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z'
        fill={BACKCOLOR}
      />
    </svg>
  )
}

export const TypescriptIcon = (props) => {
  return (
    <svg
      width='800px'
      height='800px'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect x='2' y='2' width='28' height='28' rx='1.312' fill={PURPLECOLOR} />
      <path
        d='M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z'
        fill={BACKCOLOR}
      />
    </svg>
  )
}

export const JavascriptIcon = (props) => {
  return (
    <svg
      width='800px'
      height='800px'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect x='2' y='2' width='28' height='28' fill={PURPLECOLOR} />
      <path
        fill={BACKCOLOR}
        d='M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z'
      />
    </svg>
  )
}

export const CssIcon = (props) => {
  return (
    <svg
      width='800px'
      height='800px'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M6 28L4 3H28L26 28L16 31L6 28Z' fill={PURPLECOLOR} />
      <path d='M26 5H16V29.5L24 27L26 5Z' fill={PURPLECOLOR} />
      <path
        d='M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z'
        fill={BACKCOLOR}
      />
    </svg>
  )
}

export const WebIcon = (props) => {
  return (
    <svg
      width='800px'
      height='800px'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      {...props}
    >
      <path
        stroke='#9aa2ad'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='3'
        d='M22 3h7v7M27.5 4.5L20 12M17 5H8a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-9'
      />
    </svg>
  )
}

export const EmailIcon = (props) => {
  return (
    <svg
      height='800px'
      width='800px'
      version='1.1'
      id='_x32_'
      viewBox='0 0 512 512'
      fill='#9aa2ad'
      {...props}
    >
      <g>
        <path
          d='M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345
   c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345
   C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203
   c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958
   c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064
   c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571
   c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637
   L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136
   C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435
   C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959
   l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959
   C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8
   V385.92z'
        />
      </g>
    </svg>
  )
}

export const NextjsIcon = (props) => {
  return (
    <svg
      width='800px'
      height='800px'
      viewBox='0 -101.5 512 512'
      version='1.1'
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <g>
        <path
          d='M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z'
          fill={PURPLECOLOR}
        ></path>
      </g>
    </svg>
  )
}

export const FaviconIcon = () => {
  return (
    <svg
      height='800px'
      width='800px'
      viewBox='0 0 512.001 512.001'
    >
      <g>
        <path
          style='fill:#9B5A50;'
          d='M333.403,66.824c-1.377,0-2.775-0.159-4.169-0.513c-21.242-5.291-46.568-8.086-73.234-8.086
   s-51.993,2.797-73.234,8.086c-9.183,2.335-18.542-3.317-20.847-12.529c-2.293-9.212,3.317-18.55,12.533-20.843
   c23.92-5.962,52.118-9.112,81.547-9.112s57.627,3.149,81.547,9.112c9.216,2.293,14.826,11.63,12.533,20.843
   C348.133,61.6,341.116,66.824,333.403,66.824z'
        />
        <path
          style='fill:#9B5A50;'
          d='M15.23,178.61v266.568c0,23.745,19.249,42.995,42.995,42.995h395.552
   c23.746,0,42.995-19.25,42.995-42.995V178.61H15.23z'
        />
      </g>
      <path
        style='fill:#915046;'
        d='M15.23,178.61v266.568c0,23.745,19.249,42.995,42.995,42.995h395.552
 c23.746,0,42.995-19.25,42.995-42.995V178.61H15.23z M453.777,453.776H58.225c-4.749,0-8.599-3.85-8.599-8.599V345.085
 c9.326,3.5,19.337,5.504,29.773,5.504h353.204c10.436,0,20.447-2.005,29.773-5.504v100.093
 C462.376,449.926,458.525,453.776,453.777,453.776z'
      />
      <path
        style='fill:#AA6455;'
        d='M486.742,109.818H25.26c-10.038,0-17.944,8.562-17.143,18.569L19.397,269.4
 c2.502,31.282,28.619,55.392,60.001,55.392h353.204c31.382,0,57.499-24.11,60.001-55.392l11.281-141.012
 C504.686,118.381,496.779,109.818,486.742,109.818z'
      />
      <path
        style='fill:#EBC9A0;'
        d='M144.214,359.188L144.214,359.188c-9.499,0-17.198-7.699-17.198-17.198v-51.594h34.396v51.594
 C161.412,351.488,153.712,359.188,144.214,359.188z'
      />
      <path
        style='fill:#F5DCB4;'
        d='M144.214,333.391L144.214,333.391c-9.499,0-17.198-7.699-17.198-17.198v-25.797h34.396v25.797
 C161.412,325.691,153.712,333.391,144.214,333.391z'
      />
      <path
        style='fill:#EBC9A0;'
        d='M367.787,359.188L367.787,359.188c-9.499,0-17.198-7.699-17.198-17.198v-51.594h34.396v51.594
 C384.985,351.488,377.285,359.188,367.787,359.188z'
      />
      <path
        style='fill:#F5DCB4;'
        d='M367.787,333.391L367.787,333.391c-9.499,0-17.198-7.699-17.198-17.198v-25.797h34.396v25.797
 C384.985,325.691,377.285,333.391,367.787,333.391z'
      />
      <path
        d='M505.299,109.881c-4.767-5.164-11.531-8.125-18.559-8.125H341.453V73.564c7.998-2.685,14.318-9.275,16.452-17.835
 c1.628-6.546,0.611-13.334-2.865-19.117c-3.477-5.785-8.999-9.867-15.543-11.495c-24.541-6.117-53.413-9.35-83.497-9.35
 S197.045,19,172.507,25.116c-6.547,1.63-12.069,5.711-15.546,11.496c-3.475,5.783-4.493,12.571-2.861,19.126
 c1.645,6.575,5.758,12.113,11.583,15.59c1.559,0.931,3.189,1.676,4.865,2.246v28.182H25.26c-7.027,0-13.792,2.961-18.559,8.125
 c-4.768,5.164-7.181,12.143-6.621,19.149l7.089,88.607v227.54c0,28.152,22.904,51.056,51.056,51.056h395.552
 c28.152,0,51.056-22.904,51.056-51.056V217.636l7.089-88.607C512.481,122.023,510.067,115.044,505.299,109.881z M169.743,51.834
 c-0.59-2.367-0.221-4.823,1.037-6.916c1.258-2.092,3.253-3.567,5.622-4.158c23.286-5.803,50.81-8.872,79.598-8.872
 c28.788,0,56.312,3.068,79.602,8.873c2.366,0.589,4.362,2.065,5.619,4.157c1.259,2.092,1.627,4.548,1.038,6.914
 c-1.017,4.08-4.659,6.929-8.855,6.929c-0.757,0-1.495-0.089-2.221-0.273c-21.869-5.446-47.866-8.326-75.182-8.326
 s-53.314,2.88-75.219,8.336c-0.699,0.177-1.406,0.259-2.111,0.267c-0.02,0-0.04-0.003-0.059-0.003c-0.021,0-0.042,0.003-0.062,0.003
 c-1.598-0.004-3.177-0.431-4.597-1.278C171.832,56.221,170.337,54.211,169.743,51.834z M325.33,73.665v28.091H186.672v-28.09
 c20.211-4.826,44.121-7.38,69.329-7.38C281.219,66.286,305.139,68.841,325.33,73.665z M488.71,445.177
 c0,19.263-15.671,34.933-34.933,34.933H58.225c-19.263,0-34.933-15.671-34.933-34.933V303.456c2.826,4.075,6.099,7.869,9.808,11.294
 c2.66,2.456,5.497,4.665,8.465,6.645v123.783c0,9.187,7.474,16.66,16.66,16.66h395.552c9.187,0,16.66-7.474,16.66-16.66V321.394
 c2.968-1.981,5.804-4.189,8.465-6.645c3.709-3.425,6.982-7.22,9.808-11.294V445.177z M144.214,367.249
 c13.928,0,25.259-11.331,25.259-25.259v-9.136h173.054v9.136c0,13.928,11.331,25.259,25.259,25.259s25.259-11.331,25.259-25.259
 v-9.136h39.556c7.464,0,14.783-1.214,21.711-3.535v115.859c0,0.296-0.242,0.537-0.537,0.537H58.225
 c-0.296,0-0.537-0.242-0.537-0.537v-115.86c6.929,2.322,14.247,3.535,21.711,3.535h39.556v9.136
 C118.955,355.918,130.286,367.249,144.214,367.249z M144.214,341.453c3.221,0,6.301-0.613,9.136-1.717v2.254
 c0,5.038-4.098,9.136-9.136,9.136c-5.038,0-9.136-4.098-9.136-9.136v-2.254C137.913,340.84,140.993,341.453,144.214,341.453z
  M135.078,316.193v-17.735h18.273v17.735c0,5.038-4.098,9.136-9.136,9.136C139.176,325.33,135.078,321.23,135.078,316.193z
  M367.787,341.453c3.221,0,6.301-0.613,9.136-1.717v2.254c0,5.038-4.098,9.136-9.136,9.136s-9.136-4.098-9.136-9.136v-2.254
 C361.486,340.84,364.566,341.453,367.787,341.453z M358.651,316.193v-17.735h18.273v17.735c0,5.038-4.098,9.136-9.136,9.136
 S358.651,321.23,358.651,316.193z M495.848,127.745l-11.281,141.011c-2.152,26.901-24.977,47.974-51.966,47.974h-39.556v-26.334
 c0-4.453-3.608-8.062-8.061-8.062h-34.396c-4.453,0-8.061,3.608-8.061,8.062v26.334H169.473v-26.334
 c0-4.453-3.608-8.062-8.062-8.062h-34.396c-4.453,0-8.062,3.608-8.062,8.062v26.334H79.399c-26.988,0-49.814-21.072-51.966-47.974
 L16.152,127.745c-0.205-2.572,0.645-5.033,2.395-6.928s4.134-2.938,6.713-2.938h461.482c2.579,0,4.963,1.044,6.713,2.938
 C495.204,122.713,496.054,125.174,495.848,127.745z'
      />
    </svg>
  )
}
