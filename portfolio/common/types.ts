export interface Project {
    id: number;
    heading: string;
    body: string;
    subheading?: string;
    year?: number;
    techUsed?: string[];
}
