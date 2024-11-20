// import React, { useState, useRef } from 'react'

// // 1. UseRef Use Cases
// const UseRefExamples = () => {
//     const videoRef = useRef(null)
//     const fileInputRef = useRef(null)
//     const previousValueRef = useRef('')
//     const countRenderRef = useRef(0)

//     // A. DOM Element Manipulation (Video player control)
//     const handleVideo = () => {
//         if (videoRef.current) {
//             if (videoRef.current.paused) {
//                 videoRef.current.play()
//             } else {
//                 videoRef.current.pause()
//             }
//         }
//     }

//     // B. Triggering file input through button
//     const handleFileUpload = () => {
//         fileInputRef.current.click()
//     }

//     // C. Store values that shouldn't trigger re-renders
//     countRenderRef.current += 1

//     return (
//         <div>
//             <h2>UseRef Examples</h2>

//             {/* Video Control Example */}
//             <div>
//                 <h3>1. DOM Manipulation</h3>
//                 <video 
//                     ref={videoRef} 
//                     width="200"
//                     src="/sample-video.mp4"
//                 />
//                 <button onClick={handleVideo}>Play/Pause</button>
//             </div>

//             {/* File Input Example */}
//             <div>
//                 <h3>2. Trigger Hidden Input</h3>
//                 <input 
//                     type="file"
//                     ref={fileInputRef}
//                     style={{ display: 'none' }}
//                     onChange={(e) => console.log(e.target.files)}
//                 />
//                 <button onClick={handleFileUpload}>
//                     Upload File
//                 </button>
//             </div>

//             {/* Render Count Example */}
//             <div>
//                 <h3>3. Track renders without re-rendering</h3>
//                 <p>Component has rendered: {countRenderRef.current} times</p>
//             </div>
//         </div>
//     )
// }

// // 2. UseState Use Cases
// const UseStateExamples = () => {
//     // A. Form handling
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: ''
//     })

//     // B. Toggle states
//     const [isVisible, setIsVisible] = useState(false)

//     // C. Loading states
//     const [isLoading, setIsLoading] = useState(false)
//     const [error, setError] = useState(null)
//     const [data, setData] = useState(null)

//     // D. Counter with UI updates
//     const [counter, setCounter] = useState(0)

//     const handleFormChange = (e) => {
//         const { name, value } = e.target
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//     const simulateAPICall = async () => {
//         setIsLoading(true)
//         setError(null)
//         try {
//             // Simulate API call
//             await new Promise(resolve => setTimeout(resolve, 2000))
//             setData('Data fetched successfully')
//         } catch (err) {
//             setError('Failed to fetch data')
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     return (
//         <div>
//             <h2>UseState Examples</h2>

//             {/* Form Example */}
//             <div>
//                 <h3>1. Form Handling</h3>
//                 <form>
//                     <input
//                         type="text"
//                         name="username"
//                         value={formData.username}
//                         onChange={handleFormChange}
//                         placeholder="Username"
//                     />
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleFormChange}
//                         placeholder="Email"
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleFormChange}
//                         placeholder="Password"
//                     />
//                 </form>
//                 <p>Form Data: {JSON.stringify(formData)}</p>
//             </div>

//             {/* Toggle Example */}
//             <div>
//                 <h3>2. Toggle Functionality</h3>
//                 <button onClick={() => setIsVisible(!isVisible)}>
//                     Toggle Content
//                 </button>
//                 {isVisible && <p>This content can be toggled!</p>}
//             </div>

//             {/* Loading State Example */}
//             <div>
//                 <h3>3. Loading States</h3>
//                 <button 
//                     onClick={simulateAPICall}
//                     disabled={isLoading}
//                 >
//                     {isLoading ? 'Loading...' : 'Fetch Data'}
//                 </button>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 {data && <p>{data}</p>}
//             </div>

//             {/* Counter Example */}
//             <div>
//                 <h3>4. Counter with UI Updates</h3>
//                 <button onClick={() => setCounter(prev => prev - 1)}>-</button>
//                 <span>{counter}</span>
//                 <button onClick={() => setCounter(prev => prev + 1)}>+</button>
//             </div>
//         </div>
//     )
// }

// const App = () => {
//     return (
//         <div>
//             <UseRefExamples />
//             <hr />
//             <UseStateExamples />
//         </div>
//     )
// }

// export default App