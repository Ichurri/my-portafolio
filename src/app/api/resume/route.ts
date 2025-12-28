import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch the resume from S3
    const response = await fetch(
      'https://personal-website-s3-bucket.s3.us-east-2.amazonaws.com/santiago_iturri_cv.pdf'
    );

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to fetch resume" },
        { status: 500 }
      );
    }

    // Get the file as a buffer
    const buffer = await response.arrayBuffer();

    // Return the file with appropriate headers to force download
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Santiago_Iturri_CV.pdf"',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Error downloading resume:", error);
    return NextResponse.json(
      { message: "Error downloading resume" },
      { status: 500 }
    );
  }
}
