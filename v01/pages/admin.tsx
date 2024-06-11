import { useContract, useNFTs, useUser, MediaRenderer, useAddress } from "@thirdweb-dev/react";
import { BUSINESSES_CONTRACT_ADDRESS } from "../constants/contracts";
import styles from "../styles/Admin.module.css";
import NFTCard from "../components/NFTCard";
import { getUser } from "./api/auth/[...thirdweb]";
import { useRouter } from "next/router";
import { useEffect,  useRef, useState } from "react";



export default function Admin() {
    // Get the businesses contract instance
    // Get the NFTs from contract
    const { contract: businessesContract } = useContract(BUSINESSES_CONTRACT_ADDRESS);
    const { data: businesses } = useNFTs(businessesContract);

    // Get the user's login state
    const { isLoggedIn, isLoading } = useUser();
    const router = useRouter();

    // Checks if the user is logged in and redirects to the login page if not.
    useEffect(() => {
      if (!isLoggedIn && !isLoading) {
        router.push("/login");
      }
    }, [isLoggedIn, isLoading, router]);

    const address = useAddress();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [nftName, setNftName] = useState<string>("");
    const [nftDescription, setNftDescription] = useState<string>("");
    const [mintingNFT, setMintingNFT] = useState<boolean>(false);

    const processFile = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
        setImageUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
        processFile(files[0]);
        }
    };

    const handleFileSelect = () => {
        fileInputRef.current?.click();
    };

    const reset = () => {
        setImageUrl(null);
    };

    const handleMint = async () => {
        if (!fileInputRef.current || !fileInputRef.current.files || fileInputRef.current.files.length === 0) {
        console.error("No file selected");
        return;
        }
    
        setMintingNFT(true);
        try {
        const formData = new FormData();
        formData.append('name', nftName);
        formData.append('description', nftDescription);
        formData.append('image', fileInputRef.current.files[0]);
        formData.append('address', address || '');
    
        const response = await fetch("/api/mintNFT", {
            method: "POST",
            body: formData,
        });
    
        const data = await response.json();
    
        if (!response.ok) {
            throw new Error(data.message || "Something went wrong");
        }
        // Handle successful response
        console.log("NFT minted:", data);
        } catch (error) {
        console.error("Minting error:", error);
        } finally {
        alert("NFT minted!");
        setMintingNFT(false);
        setImageUrl(null);
        setNftName("");
        setNftDescription("");
        }
    };
    

    return (
        <div className={styles.container}>
        {address ? (
            <div className={styles.minterContainer}>
            <div className={styles.mintContainerSection}>
                <h1>Add Business</h1>
                <div 
                className={styles.fileContainer} 
                onClick={handleFileSelect}
                >
                <input
                    type="file"
                    accept='image/*'
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleChange}
                />
                {!imageUrl ? (
                    <div
                    style={{ 
                        border: '2px dashed grey', 
                        padding: '20px', 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: '100%',
                        width: '100%',    
                    }}
                    >
                    <p>Click to add file</p>
                    </div>
                ) : (
                    <div style={{ height: "100%" }}>
                    <MediaRenderer
                        src={imageUrl}
                        height='100%'
                        width='100%'
                    />
                    <button 
                        onClick={reset}
                        className={styles.resetButton}
                    >Reset</button>
                    </div>
                )}
                </div>
            </div>
            <div className={styles.mintContainerSection}>
                <h1>Business Details</h1>
                <p>Business Name:</p>
                <input 
                type="text"
                placeholder="My Business Name"
                onChange={(e) => setNftName(e.target.value)}
                value={nftName}
                className={styles.metadataInput}
                />
                <p>Business Description:</p>
                <input 
                type="text"
                placeholder="This Business is about..."
                onChange={(e) => setNftDescription(e.target.value)}
                value={nftDescription}
                className={styles.metadataInput}
                />
                <button
                className={styles.mintButton}
                onClick={handleMint}
                disabled={mintingNFT}
                >{mintingNFT ? "Adding Business..." : "Add Business"}</button>
            </div>
            </div>
        ) : (
            <div>
            <h1>Sign in to mint an NFT</h1>
            </div>
        )}
        </div>
    );
};

// This is a server-side function that checks if the user is logged in and redirects to the login page if not.
export async function getServerSideProps(context: any) {
    const user = await getUser(context.req);
  
    console.log("Checking user" + user?.address);
    if(!user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    return {
      props: {},
    };
  }