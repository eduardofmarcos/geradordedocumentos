import ImageKit from "imagekit"

export class Uploader {
    
    imageKit: any
    imageUrl: any
    file: any
    fileName: any
    
    constructor(file: any, fileName: any) {
        this.imageKit = new ImageKit({
            
            publicKey: "public_WVp93F7cqaJyu/CjGXEQo4IqunY=",
            privateKey: "private_Fbrjg9ii5EcFslgjrfs5RVjRX2E=",
            urlEndpoint: "https://ik.imagekit.io/XBKMXDRFLyLV3hMJJwSz"
            
        });
        
        this.imageUrl = this.imageKit.url({
            src: "https://ik.imagekit.io/your_imagekit_id/endpoint/default-image.jpg",
            transformation: [{
                "height": "300",
                "width": "400"
            }]
        });
        
        this.file = file
        this.fileName = fileName
        
    }
    
    async uploadImageToServer() {
        
        let result = await this.imageKit.upload({
            file: this.file, //required
            fileName: this.fileName,   //required
            extensions: [
                {
                    name: "google-auto-tagging",
                    maxTags: 5,
                    minConfidence: 95
                }
            ]
        })
        return result.thumbnailUrl
    }
}
