import pandas as pd

try:
    # Read file with regex separator, skip header row
    df = pd.read_csv(
        "metadata.csv",
        sep=r'\s{2,}|\t',   # tabs or 2+ spaces
        engine="python",
        skiprows=1,         # skip the header row
        on_bad_lines="skip",
        encoding="utf-8",
        names=["file_path", "transcriptions"]
    )

    # Strip whitespace from strings
    df = df.map(lambda x: x.strip() if isinstance(x, str) else x)

    # Drop rows with missing transcriptions
    df.dropna(subset=["transcriptions"], inplace=True)

    print("✅ Loaded and cleaned metadata.csv:")
    print(df.head())

    # ✅ Save the cleaned data to a new file
    df.to_csv("cleaned_metadata.csv", sep="\t", index=False, encoding="utf-8")
    print("💾 Cleaned data saved to cleaned_metadata.csv")

except Exception as e:
    print("❌ Error while reading metadata.csv:")
    print(str(e))
